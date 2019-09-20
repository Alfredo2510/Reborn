import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SectorLesionPage } from './sector-lesion.page';
const routes = [
    {
        path: '',
        component: SectorLesionPage
    }
];
let SectorLesionPageModule = class SectorLesionPageModule {
};
SectorLesionPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SectorLesionPage]
    })
], SectorLesionPageModule);
export { SectorLesionPageModule };
//# sourceMappingURL=sector-lesion.module.js.map