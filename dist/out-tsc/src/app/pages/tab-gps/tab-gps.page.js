import * as tslib_1 from "tslib";
import { Platform, ToastController } from "@ionic/angular";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
let TabGpsPage = class TabGpsPage {
    constructor(fb, geolocation, platform, androidPermissions, locationAccuracy, toastController) {
        this.fb = fb;
        this.geolocation = geolocation;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
        this.toastController = toastController;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.currentLocation = {
            lat: 0,
            lng: 0
        };
        this.destination = {
            text: ""
        };
        this.pos = {
            lat: 0,
            lng: 0
        };
    }
    ngOnInit() {
        this.loadMap();
        this.androidPermissions
            .checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
            .then(result => {
            if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                this.askToTurnOnGPS();
            }
            else {
                //If not having permission ask for permission
                this.requestGPSPermission();
            }
        }, err => {
            console.log(err);
            alert(err);
        });
        this.getPosition();
    }
    requestGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
                console.log("4");
            }
            else {
                //Show 'GPS Permission Request' dialogue
                this.androidPermissions
                    .requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(() => {
                    // call method to turn on GPS
                    this.askToTurnOnGPS();
                }, error => {
                    console.log(error);
                    //Show alert if user click on 'No Thanks'
                    alert("requestPermission Error requesting location permissions " +
                        error);
                });
            }
        });
    }
    askToTurnOnGPS() {
        this.locationAccuracy
            .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
            .then(() => {
            // When GPS Turned ON call method to get Accurate location coordinates
            this.getPosition();
        }, error => {
            console.log(error);
            alert("Error requesting location permissions " + JSON.stringify(error));
        });
    }
    loadMap() {
        try {
            this.map = new google.maps.Map(document.getElementById("map"), {
                zoom: 7,
                center: { lat: 41.85, lng: -87.65 }
            });
        }
        catch (e) {
            window.alert("Map load failed" + e);
        }
        this.directionsRenderer.setMap(this.map);
    }
    getPosition() {
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
    setCenter(position) {
        this.myLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        this.map.setCenter(this.myLatLng);
    }
    calculateAndDisplayRoute() {
        var t = this;
        this.directionsService.route({
            origin: t.myLatLng,
            destination: t.destination.text,
            travelMode: "DRIVING"
        }, (response, status) => {
            if (status === "OK") {
                this.directionsRenderer.setDirections(response);
            }
            else {
                window.alert("Directions request failed due to " + status);
            }
        });
    }
    getCree() {
        this.destination.text = 'Predio Canoas, ISSSTE, Predio Canoas, 34079 Durango, Dgo.';
        this.calculateAndDisplayRoute();
    }
    getConade() {
        this.destination.text = 'Av. Heroico Colegio Militar S/N, Centro, 34000 Durango, Dgo.';
        this.calculateAndDisplayRoute();
    }
};
tslib_1.__decorate([
    ViewChild("mapElement", { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], TabGpsPage.prototype, "mapNativeElement", void 0);
tslib_1.__decorate([
    ViewChild("end", { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], TabGpsPage.prototype, "endElement", void 0);
TabGpsPage = tslib_1.__decorate([
    Component({
        selector: "app-tab-gps",
        templateUrl: "./tab-gps.page.html",
        styleUrls: ["./tab-gps.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        Geolocation,
        Platform,
        AndroidPermissions,
        LocationAccuracy,
        ToastController])
], TabGpsPage);
export { TabGpsPage };
//# sourceMappingURL=tab-gps.page.js.map