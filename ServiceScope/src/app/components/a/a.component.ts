import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private dataService: SharedService) { }

  ngOnInit() {
  }

  get data(): string {
    return this.dataService.value;
  }

  change() {
    this.dataService.value = 'A data';
  }
}
