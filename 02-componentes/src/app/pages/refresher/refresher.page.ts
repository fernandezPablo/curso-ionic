import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];
  //Se puede usar el parametro event que viene desde el html
  //o se puede capturar el IonRefresher mediante un ViewChild
  @ViewChild(IonRefresher) refresher: IonRefresher;

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ){
    setTimeout(() => {
      this.items = Array(20);
      this.refresher.complete();
      //event.target.complete();
    }, 1500);
  }

}
