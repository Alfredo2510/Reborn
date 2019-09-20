import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from '../../pages/home/home.page';
const routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: '',
                children: [
                    {
                        path: '/tab-terapias',
                        loadChildren: () => import('../../pages/tab-terapias/tab-terapias.module').then(m => m.TabTerapiasPageModule)
                    }
                ]
            },
            {
                path: 'graficas',
                children: [
                    {
                        path: '../../pages/tab-graficas',
                        loadChildren: () => import('../../pages/tab-graficas/tab-graficas.module').then(m => m.TabGraficasPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map