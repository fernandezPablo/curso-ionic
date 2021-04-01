import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data : any[] = Array(20);
  infiniteEnabled = false;

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    console.log(event);

    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push( ... nuevoArr);
      
      //para que funcione la deshabilitacion del infinite scroll mediante
      //este codigo, se debe controlar la propiedad [enabled] en la etiqueta
      //infinite-scroll del html mediante el atributo infiniteEnabled definido en esta clase
      // if(this.data.length >= 60) this.infiniteEnabled = true;
      
      if(this.data.length >= 60) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
      }
      

      this.infiniteScroll.complete();
    }, 1500);
  }

}
