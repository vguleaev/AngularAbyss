import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-block-a',
  templateUrl: './block-a.component.html',
  styleUrls: ['./block-a.component.css']
})
export class BlockAComponent implements OnInit, OnDestroy {

  array = [1, 2, 3];
  array2 = [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}, {id: 3, name: 'name3'}];
  show = false;
  constructor() {}

  ngOnInit() {
    console.log('block A created');
  }

  ngOnDestroy() {
    console.log('block A destroyed');
  }

  showFn() {
    this.show = !this.show;
  }

  addInArray() {
    this.array.push(10);
    this.array2.push({id: 10, name: 'mmmmONSTER KILL'});
  }

  replaceArray() {
    this.array = [1, 2];
    this.array2 = [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}, {id: 3, name: 'name3'}];
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }
}
