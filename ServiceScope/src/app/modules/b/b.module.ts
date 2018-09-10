import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from '../../components/b/b.component';
import { SharedService } from '../../services/shared.service';
import { BRoutingModule } from './b-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BRoutingModule
  ],
  exports: [
    BRoutingModule
  ],
  declarations: [BComponent],
  providers: [SharedService]
})
export class BModule { }
