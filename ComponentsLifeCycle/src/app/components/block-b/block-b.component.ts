import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-b',
  templateUrl: './block-b.component.html',
  styleUrls: ['./block-b.component.css']
})
export class BlockBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('block B created');
  }

  ngOnDestroy() {
    console.log('block B destroyed');
  }

}
