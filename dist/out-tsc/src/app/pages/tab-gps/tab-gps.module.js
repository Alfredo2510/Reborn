import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabGpsPage } from './tab-gps.page';
import { ComponentsModule } from 'src/app/components/components.module';
const routes = [
    {
        path: '',
        component: TabGpsPage
    }
];
let TabGpsPageModule = class TabGpsPageModule {
};
TabGpsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComponentsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TabGpsPage]
    })
], TabGpsPageModule);
export { TabGpsPageModule };
//# sourceMappingURL=tab-gps.module.js.map