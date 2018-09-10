import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'pageA', component: AComponent},
  {path: 'pageB', loadChildren: './modules/b/b.module#BModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
