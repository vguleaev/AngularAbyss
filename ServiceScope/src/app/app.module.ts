import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './components/b/b.component';
import { AComponent } from './components/a/a.component';
import { SharedService } from './services/shared.service';
import { AModule } from './modules/a/a.module';
import { BModule } from './modules/b/b.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
