import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CModuleRoutingModule } from './c-module-routing.module';
import { PageCComponent } from './pages/page-c/page-c.component';
import { RouterModule } from '@angular/router';
import { BlockCComponent } from '../components/block-c/block-c.component';

@NgModule({
  imports: [
    CommonModule,
    CModuleRoutingModule,
  ],
  declarations: [PageCComponent, BlockCComponent]
})
export class CModuleModule { }
