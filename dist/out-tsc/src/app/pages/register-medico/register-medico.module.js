import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterMedicoPage } from './register-medico.page';
const routes = [
    {
        path: '',
        component: RegisterMedicoPage
    }
];
let RegisterMedicoPageModule = class RegisterMedicoPageModule {
};
RegisterMedicoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RegisterMedicoPage]
    })
], RegisterMedicoPageModule);
export { RegisterMedicoPageModule };
//# sourceMappingURL=register-medico.module.js.map