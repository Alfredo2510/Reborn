import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'tab-terapias', loadChildren: './pages/tab-terapias/tab-terapias.module#TabTerapiasPageModule' },
    { path: 'tab-graficas', loadChildren: './pages/tab-graficas/tab-graficas.module#TabGraficasPageModule' },
    { path: 'perfil-medico', loadChildren: './pages/perfil-medico/perfil-medico.module#PerfilMedicoPageModule' },
    { path: 'sector-lesion', loadChildren: './pages/sector-lesion/sector-lesion.module#SectorLesionPageModule' },
    { path: 'rol', loadChildren: './pages/rol/rol.module#RolPageModule' },
    { path: 'register-medico', loadChildren: './pages/register-medico/register-medico.module#RegisterMedicoPageModule' },
    { path: 'perfil-user', loadChildren: './pages/perfil-user/perfil-user.module#PerfilUserPageModule' },
    { path: 'tab-gps', loadChildren: './pages/tab-gps/tab-gps.module#TabGpsPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map