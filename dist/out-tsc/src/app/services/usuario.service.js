import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UsuarioService = class UsuarioService {
    constructor() {
        this.usuario = {};
    }
    cargarUsuario(nombre, email, imagen, uid, provider) {
        this.usuario.nombre = nombre;
        this.usuario.email = email;
        this.usuario.imagen = imagen;
        this.usuario.uid = uid;
        this.usuario.provider = provider;
    }
};
UsuarioService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], UsuarioService);
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map