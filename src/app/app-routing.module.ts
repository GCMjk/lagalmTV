import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
      initialNavigation: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
