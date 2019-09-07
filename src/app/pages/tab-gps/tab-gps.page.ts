import { Platform } from "@ionic/angular";
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
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";

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

  constructor(
    private fb: FormBuilder,
    private geolocation: Geolocation,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    public locationAccuracy: LocationAccuracy
  ) {}

  ngOnInit() {
    this.loadMap();
    this.androidPermissions
      .checkPermission(
        this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
      )
      .then(
        result => {
          if (result.hasPermission) {
            //If having permission show 'Turn On GPS' dialogue
            this.askToTurnOnGPS();
          } else {
            //If not having permission ask for permission
            this.requestGPSPermission();
          }
        },
        err => {
          console.log(err);
          alert(err);
        }
      );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions
          .requestPermission(
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
          )
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              console.log(error);
              //Show alert if user click on 'No Thanks'
              alert(
                "requestPermission Error requesting location permissions " +
                  error
              );
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy
      .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(
        () => {
          // When GPS Turned ON call method to get Accurate location coordinates
          this.getPosition();
        },
        error => {
          console.log(error);
          alert(
            "Error requesting location permissions " + JSON.stringify(error)
          );
        }
      );
  }

  loadMap() {
    try {
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 }
      });
    } catch (e) {
      window.alert("Map load failed" + e);
    }
    this.directionsRenderer.setMap(this.map);
  }

  getPosition(): any {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.setCenter(resp);
        console.log(resp);
      })
      .catch(err => {
        console.log("error obteniendo location " + err);
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
