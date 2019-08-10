import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'tab-terapias', loadChildren: './pages/tab-terapias/tab-terapias.module#TabTerapiasPageModule' },
  { path: 'tab-graficas', loadChildren: './pages/tab-graficas/tab-graficas.module#TabGraficasPageModule' },
  { path: 'perfil-medico', loadChildren: './pages/perfil-medico/perfil-medico.module#PerfilMedicoPageModule' },
  { path: 'sector-lesion', loadChildren: './pages/sector-lesion/sector-lesion.module#SectorLesionPageModule' },
  { path: 'rol', loadChildren: './pages/rol/rol.module#RolPageModule' },
  { path: 'register-medico', loadChildren: './pages/register-medico/register-medico.module#RegisterMedicoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }