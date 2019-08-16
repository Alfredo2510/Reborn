import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";

declare var google;

@Component({
  selector: "app-tab-gps",
  templateUrl: "./tab-gps.page.html",
  styleUrls: ["./tab-gps.page.scss"]
})
export class TabGpsPage implements OnInit {
  @ViewChild("mapElement", { static: false }) mapNativeElement: ElementRef;
  @ViewChild("end", { static: false }) endElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionForm: FormGroup;
  map;
  myLatLng;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };

  destination: any = {
    text: ""
  };

  pos: any = {
    lat: 0,
    lng: 0
  };

  constructor(private fb: FormBuilder, private geolocation: Geolocation) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    try {
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 }
      });
    } catch (e) {
      window.alert("No CurrentLocation " + e);
    }
    this.directionsRenderer.setMap(this.map);
  }

  getPosition(): any {
    this.geolocation.getCurrentPosition().then(resp => {
      this.setCenter(resp);
    });
  }

  setCenter(position: Geoposition) {
    this.myLatLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    this.map.setCenter(this.myLatLng);
  }
  calculateAndDisplayRoute(destination): void {
    var t = this;
    this.directionsService.route(
      {
        origin: t.myLatLng,
        destination: t.destination.text,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          this.directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
}
