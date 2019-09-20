import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
let HeaderComponent = class HeaderComponent {
    constructor(menuCtrl, usuarioProv) {
        this.menuCtrl = menuCtrl;
        this.usuarioProv = usuarioProv;
        this.photoUser = {};
        this.photoUser = this.usuarioProv.usuario;
    }
    ngOnInit() { }
    MostrarMenu() {
        this.menuCtrl.toggle();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], HeaderComponent.prototype, "titulo", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MenuController,
        UsuarioService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map