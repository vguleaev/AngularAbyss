import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  data = 'default';

  constructor() { 
    console.log('created');
  }

  get value() {
    return this.data;
  }

  set value(value){
    this.data = value;
  }
}
