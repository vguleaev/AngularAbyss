import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnChanges, DoCheck {
  @Input() data: any;

  constructor() { }

  ngOnChanges() {
    console.log('Child a change');
  }

  ngDoCheck() {
    console.log('Child a do check');
  }
}
