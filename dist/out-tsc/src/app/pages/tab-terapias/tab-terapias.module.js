import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabTerapiasPage } from './tab-terapias.page';
import { ComponentsModule } from '../../components/components.module';
const routes = [
    {
        path: '',
        component: TabTerapiasPage
    }
];
let TabTerapiasPageModule = class TabTerapiasPageModule {
};
TabTerapiasPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            ComponentsModule
        ],
        declarations: [TabTerapiasPage]
    })
], TabTerapiasPageModule);
export { TabTerapiasPageModule };
//# sourceMappingURL=tab-terapias.module.js.map