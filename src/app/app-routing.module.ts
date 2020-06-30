import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: '',
    //redirectTo: 'tab1',
    //pathMatch: 'full',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule'

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inside',
    loadChildren: () => import('./pages/inside/inside.module').then( m => m.InsidePageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'tabs',
    //loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    //canActivate: [AuthGuardService]
  },
  {
    path: 'general',
    loadChildren: './pages/general/general.module#GeneralPageModule',
  },
  /*{
    path: 'tab1',
    //loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule),
    //canActivate: [AuthGuardService]
    loadChildren: './pages/tab1/tab1.module#Tab1PageModule',
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
