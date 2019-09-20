import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilMedicoPage } from './perfil-medico.page';
import { ComponentsModule } from '../../components/components.module';
const routes = [
    {
        path: '',
        component: PerfilMedicoPage
    }
];
let PerfilMedicoPageModule = class PerfilMedicoPageModule {
};
PerfilMedicoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ComponentsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PerfilMedicoPage]
    })
], PerfilMedicoPageModule);
export { PerfilMedicoPageModule };
//# sourceMappingURL=perfil-medico.module.js.map