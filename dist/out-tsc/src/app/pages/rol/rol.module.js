import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RolPage } from './rol.page';
const routes = [
    {
        path: '',
        component: RolPage
    }
];
let RolPageModule = class RolPageModule {
};
RolPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RolPage]
    })
], RolPageModule);
export { RolPageModule };
//# sourceMappingURL=rol.module.js.map