import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';

const routes: Routes = [
  { path: 'pageA', component: PageAComponent },
  { path: 'pageB', component: PageBComponent },
  { path: 'pageC', loadChildren: './c-module/c-module.module#CModuleModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
