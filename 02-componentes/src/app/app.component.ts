import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService/*, private menuCtrl: MenuController*/) {}

  ngOnInit(): void {
    this.componentes = this.dataService.getMenuOpts();
  }

  // closeMenu(){
  //   this.menuCtrl.close('first');
  // }

}
