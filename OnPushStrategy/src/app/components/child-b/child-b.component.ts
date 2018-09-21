import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit, OnChanges, DoCheck {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Child b change');
  }

  ngDoCheck() {
    console.log('Child b do check');
  }

}
