import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-block-a',
  templateUrl: './block-a.component.html',
  styleUrls: ['./block-a.component.css']
})
export class BlockAComponent implements OnInit, OnDestroy {

  array = [1, 2, 3];
  show = false;
  constructor() {}

  ngOnInit() {
    console.log('block A created');
  }

  ngOnDestroy() {
    console.log('block A destroyed');
  }

  showFn(){
    this.show = !this.show;
  }

  addInArray() {
    this.array.push(10);
  }

  replaceArray() {
    this.array = [1, 2];
  }
}
