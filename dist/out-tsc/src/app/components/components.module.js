import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            HeaderComponent,
            MenuComponent,
            TabsComponent
        ],
        imports: [
            CommonModule,
            IonicModule,
            RouterModule
        ],
        exports: [
            HeaderComponent,
            MenuComponent,
            TabsComponent
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map