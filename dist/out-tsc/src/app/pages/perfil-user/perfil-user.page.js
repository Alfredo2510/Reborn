import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
let PerfilUserPage = class PerfilUserPage {
    constructor(UsuarioProv, afAuth, navCtrl) {
        this.UsuarioProv = UsuarioProv;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.user = {};
        this.user = this.UsuarioProv.usuario;
        this.afAuth.authState.subscribe(user => {
            console.log('AFAUTH' + JSON.stringify(user));
        });
    }
    ngOnInit() {
    }
    salir() {
        this.afAuth.auth.signOut().then(res => {
            this.UsuarioProv.usuario = {};
            this.navCtrl.navigateRoot('/login');
        });
    }
};
PerfilUserPage = tslib_1.__decorate([
    Component({
        selector: 'app-perfil-user',
        templateUrl: './perfil-user.page.html',
        styleUrls: ['./perfil-user.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UsuarioService,
        AngularFireAuth,
        NavController])
], PerfilUserPage);
export { PerfilUserPage };
//# sourceMappingURL=perfil-user.page.js.map