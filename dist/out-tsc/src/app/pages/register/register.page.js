import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
let RegisterPage = class RegisterPage {
    constructor(afAuth, alert, router, afs) {
        this.afAuth = afAuth;
        this.alert = alert;
        this.router = router;
        this.afs = afs;
        this.username = "";
        this.password = "";
        this.copyPassword = "";
    }
    ngOnInit() {
    }
    register() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { username, password, copyPassword } = this;
            if (password != copyPassword) {
                this.showAlert("¡Error!", "las contraseñas no coinciden");
                return console.error("Contraseña incorrecta");
            }
            try {
                const res = yield this.afAuth.auth.createUserWithEmailAndPassword(username, password);
                console.log(res);
                // this.afs.doc(`user/${res.user.uid}`).set(JSON.parse(JSON.stringify(username, password)))
                this.showAlert("¡Registro Exitoso!", "Inicia Sesión para ver todo el contenido");
                this.router.navigate(['/login']);
            }
            catch (error) {
                console.dir(error);
                this.showAlert("Error", error.message);
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
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
        AlertController,
        Router,
        AngularFirestore])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map