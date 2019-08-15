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
import { Geolocation } from "@ionic-native/geolocation/ngx";
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
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.geolocation.getCurrentPosition().then(resp => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;

      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 }
      });
      this.map.setCenter(this.currentLocation);
      this.directionsRenderer.setMap(this.map);
    });
    var t = this;
    var onChangeHandler = function() {};
  }

  calculateAndDisplayRoute(destination): void {
    var t = this;
    this.directionsService.route(
      {
        origin: t.currentLocation,
        destination: t.destination.text,
        provideRouteAlternatives: true,
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

  /*this.geolocation.getCurrentPosition().then(resp => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;

      this.map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 }
      });
      const infoWindow = new google.maps.InfoWindow();
      const pos = {
        lat: this.currentLocation.lat,
        lng: this.currentLocation.lng
      };
      /*infoWindow.setPosition(pos);
      infoWindow.setContent("Location found.");
      infoWindow.open(this.map);
      this.map.setCenter(pos);
    });

    this.directionsDisplay.setMap(this.map);
  }*/
  /* calculateAndDisplayRoute(formValues) {
    let directionsDisplay = new google.maps.DirectionsRenderer();
    const _self = this;
    this.directionsService.route(
      {
        origin: this.currentLocation,
        destination: this.destination.text,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          try {
            directionsDisplay.setDirections(response);
            console.log(response);
          } catch (e) {
            console.log(e);
          }
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
    /*var request1 = {
      origin: this.currentLocation,
      destination: this.destination.text,
      travelMode: google.maps.TravelMode.DRIVING
      };
    this.directionsService.route(request1, function(response, status,routes) {
      var t = this;
      if (status === google.maps.DirectionsStatus.OK) {
        t.directionsDisplay.setDirections(response);
       }
      })*/
  /*this.directionsService.route(
      {
        origin: this.currentLocation,
        destination: this.destination.text,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        provideRouteAlternatives: true,
      },
      (response, status) => {
        if (status === "OK") {
          this.directionsDisplay.setDirections(response);
          console.log(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );*/
  /*var request = {
      origin: {query: this.currentLocation},
      destination: {query: this.destination.text},
      travelMode: "DRIVING"
    };
    this.directionsService.route(request, function(result, status) {
      if (status == "OK") {
        var m = new google.maps.DirectionsRenderer().setDirections(result);
        console.log(m);
        //var display = directionsDisplay.setDirections(result);
      }else{
        window.alert('Directions request failed due to ' + status);
      }
    });*/
}
