import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { BlockAComponent } from './components/block-a/block-a.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { BlockBComponent } from './components/block-b/block-b.component';
import { ChildBComponent } from './components/child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    BlockAComponent,
    ChildAComponent,
    BlockBComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
