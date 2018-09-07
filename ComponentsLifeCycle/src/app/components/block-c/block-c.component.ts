import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-block-c',
  templateUrl: './block-c.component.html',
  styleUrls: ['./block-c.component.css']
})
export class BlockCComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('block C created');
  }

  ngOnDestroy() {
    console.log('block C destroyed');
  }

}
