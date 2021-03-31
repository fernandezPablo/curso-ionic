import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

//Modulos de la app
import { AlertPageRoutingModule } from './alert-routing.module';
import { ComponentsModule } from '../../components/components.module';

//Paginas
import { AlertPage } from './alert.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
