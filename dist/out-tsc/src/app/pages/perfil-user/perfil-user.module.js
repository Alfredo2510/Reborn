import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilUserPage } from './perfil-user.page';
import { ComponentsModule } from '../../components/components.module';
const routes = [
    {
        path: '',
        component: PerfilUserPage
    }
];
let PerfilUserPageModule = class PerfilUserPageModule {
};
PerfilUserPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComponentsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PerfilUserPage]
    })
], PerfilUserPageModule);
export { PerfilUserPageModule };
//# sourceMappingURL=perfil-user.module.js.map