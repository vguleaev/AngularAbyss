import { Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data: any = {
    prop1 : 'hello',
    prop2: [1, 2, 3]
  };

  constructor() { }

  ngOnInit() {
  }

  changeString() {
    this.data.prop1 = 'new string';
  }

  changeArray() {
    this.data.prop2.push(10);
  }

  changeObject() {
    this.data = { prop3: 'test'};
  }
}
