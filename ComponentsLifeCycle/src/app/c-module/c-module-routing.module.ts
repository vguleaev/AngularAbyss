import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCComponent } from './pages/page-c/page-c.component';

const routes: Routes = [
  { path: '', component: PageCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CModuleRoutingModule { }
