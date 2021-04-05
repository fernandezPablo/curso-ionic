import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje = 0.3

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event ){
    console.log('Event: ',event);
    this.porcentaje = event.detail.value / 100;
  }

}
