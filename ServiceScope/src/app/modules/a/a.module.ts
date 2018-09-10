import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { AComponent } from '../../components/a/a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AComponent],
  providers: [ SharedService]
})
export class AModule { }
