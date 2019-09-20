import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabGraficasPage } from './tab-graficas.page';
import { ComponentsModule } from '../../components/components.module';
const routes = [
    {
        path: '',
        component: TabGraficasPage
    }
];
let TabGraficasPageModule = class TabGraficasPageModule {
};
TabGraficasPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComponentsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TabGraficasPage]
    })
], TabGraficasPageModule);
export { TabGraficasPageModule };
//# sourceMappingURL=tab-graficas.module.js.map