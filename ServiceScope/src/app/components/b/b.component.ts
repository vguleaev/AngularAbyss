import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private dataService: SharedService) { }

  ngOnInit() {
  }

  get data(): string {
    return this.dataService.value;
  }

  change() {
    this.dataService.value = 'B data';
  }
}
