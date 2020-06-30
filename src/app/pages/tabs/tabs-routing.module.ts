import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',        
		component: TabsPage,
		children: [
			{ path: 'cuenta', loadChildren: '../inside/inside.module#InsidePageModule'},
			{ path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule'},
			//{ path: 'tab2', loadChildren: '../tab2/tab2.module#Tab2PageModule'},
			{ path: 'general', loadChildren: '../general/general.module#GeneralPageModule'},
			{ path: 'mediciones', loadChildren: '../mediciones/mediciones.module#MedicionesPageModule'},
			//{ path: 'tab1/details', loadChildren: '../details/details.module#DetailsPageModule'},
			{ path: 'mediciones/medicion/:id', loadChildren: '../medicion/medicion.module#MedicionPageModule'},
		]
	},
	{
		path: '',
		redirectTo: '/tabs/cuenta',
		//redirectTo: 'inside',
		pathMatch: 'full',
		component: TabsPage,
		
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
