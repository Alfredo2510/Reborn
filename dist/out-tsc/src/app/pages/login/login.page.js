import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
// import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
// import {auth} from '@firebase/app';
import { NavController, AlertController } from "@ionic/angular";
import { UsuarioService } from "../../services/usuario.service";
import { AngularFirestore } from "@angular/fire/firestore";
let LoginPage = class LoginPage {
    constructor(afAuth, usuarioProv, navCtrl, afs, alert) {
        this.afAuth = afAuth;
        this.usuarioProv = usuarioProv;
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.alert = alert;
        this.username = "";
        this.password = "";
    }
    signInWithFacebook() {
        this.afAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(res => {
            console.log(res);
            const user = res.user;
            this.usuarioProv.cargarUsuario(user.displayName, user.email, user.photoURL, user.uid, "Facebook");
            let Datauser = this.usuarioProv.usuario;
            this.afs
                .doc(`user/${res.user.uid}`)
                .set(JSON.parse(JSON.stringify(Datauser)));
            this.navCtrl.navigateRoot("/home");
        });
    }
    signInWithGoogle() {
        this.afAuth.auth
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(res => {
            console.log(res);
            let user = res.user;
            this.usuarioProv.cargarUsuario(user.displayName, user.email, user.photoURL, user.uid, "Google");
            let Datauser = this.usuarioProv.usuario;
            this.afs
                .doc(`user/${res.user.uid}`)
                .set(JSON.parse(JSON.stringify(Datauser)));
            this.navCtrl.navigateRoot("/home");
        });
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { username, password } = this;
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(username, password);
                this.showAlert("Success!", "Bienvenido/a!");
                this.navCtrl.navigateRoot("/home");
            }
            catch (err) {
                console.dir(err);
                if (err.code === "auth/user-not-found") {
                    // console.log("El usuario no existe")
                    // this.showAlert("Error", err.message)
                }
                this.showAlert("Error", err.message);
            }
        });
    }
    showAlert(header, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: ["OK"]
            });
            yield alert.present();
        });
    }
    ngOnInit() { }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.page.html",
        styleUrls: ["./login.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
        UsuarioService,
        NavController,
        AngularFirestore,
        AlertController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map