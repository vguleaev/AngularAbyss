import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-block-b',
  templateUrl: './block-b.component.html',
  styleUrls: ['./block-b.component.css']
})
export class BlockBComponent implements OnInit, OnChanges, DoCheck {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Block B change');
  }

  changeObject() {
    this.data.string = 'block b changed';
  }

  ngDoCheck() {
    console.log('Block B do check');
  }
}
