import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'dishdetail', loadChildren: './tab1/dishdetail/dishdetail.module#DishdetailPageModule' },
  { path: 'tabs/tab1', loadChildren: './tab1/tab1.module#Tab1PageModule'},
  { path: 'create-order', loadChildren: './tab2/create-order/create-order.module#CreateOrderPageModule' },
  { path: 'tabs/tab2', loadChildren: './tab2/tab2.module#Tab2PageModule'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
