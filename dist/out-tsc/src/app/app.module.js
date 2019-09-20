import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
// import { LoginPage } from './pages/login/login.page';
// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { ComponentsModule } from "./components/components.module";
import { TabsService } from "./core/tabs.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player/ngx";
export const firebaseConfig = {
    apiKey: "AIzaSyDcurmjOtRoXaIdx-vgAjQspFR5QYXl9io",
    authDomain: "reborn-6ff1a.firebaseapp.com",
    databaseURL: "https://reborn-6ff1a.firebaseio.com",
    projectId: "reborn-6ff1a",
    storageBucket: "reborn-6ff1a.appspot.com",
    messagingSenderId: "964798570490",
    appId: "1:964798570490:web:54145ecf009ea905"
};
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [
            BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            ComponentsModule,
            FormsModule,
            ReactiveFormsModule
        ],
        providers: [
            StatusBar,
            SplashScreen,
            AngularFirestore,
            TabsService,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            Geolocation,
            LocationAccuracy,
            AndroidPermissions,
            YoutubeVideoPlayer
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map