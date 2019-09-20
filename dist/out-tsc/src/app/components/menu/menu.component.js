import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor() {
        this.appPage = [
            {
                titulo: 'Inicio',
                url: 'home',
                icono: 'home'
            },
            {
                titulo: 'Doctores',
                url: 'perfil-medico',
                icono: 'md-heart'
            },
            {
                titulo: 'Contácto',
                url: '#',
                icono: 'md-information-circle'
            },
            {
                titulo: 'Ayuda',
                url: '#',
                icono: 'md-help-circle'
            },
            {
                titulo: 'Promoción',
                url: '#',
                icono: 'md-pricetag'
            },
            {
                titulo: 'Políticas de Privacidad',
                url: '#',
                icono: 'md-document'
            }
        ];
    }
    ngOnInit() { }
};
MenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map