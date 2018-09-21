import { Component, OnInit, OnChanges, Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-block-a',
  templateUrl: './block-a.component.html',
  styleUrls: ['./block-a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockAComponent implements OnChanges, DoCheck {
  @Input() data: any;

  constructor() { }

  ngOnChanges() {
    console.log('Block A change');
  }

  ngDoCheck() {
    console.log('Block A do check');
  }
}
