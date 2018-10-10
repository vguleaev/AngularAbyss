import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { id: 1, name: 'Item #1'},
    { id: 2, name: 'Item #2'},
    { id: 3, name: 'Item #3'},
  ];

  addItem() {
    this.items.push({id: 10, name: 'Item #10'});
  }

  replaceList() {
    this.items = [
      { id: 1, name: 'Item #12'},
      { id: 2, name: 'Item #2'},
      { id: 3, name: 'Item #3'},
      { id: 4, name: 'Item #4'},
    ];
  }

  trackItem(index: number, item: any) {
    return item ? item.id : null;
  }
}
