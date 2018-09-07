import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { BlockAComponent } from './components/block-a/block-a.component';
import { BlockBComponent } from './components/block-b/block-b.component';
import { BlockCComponent } from './components/block-c/block-c.component';
import { ChildAComponent } from './components/block-a/childs/child-a/child-a.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    BlockAComponent,
    BlockBComponent,
    ChildAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
