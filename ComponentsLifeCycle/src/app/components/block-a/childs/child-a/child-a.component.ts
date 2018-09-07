import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit, OnDestroy {

  @Input() data: any;
  constructor() { }


  ngOnInit() {
    console.log('child A created');
  }

  ngOnDestroy() {
    console.log('child A destroyed');
  }

}
