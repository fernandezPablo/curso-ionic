import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Pablo',
        pais: 'Argentina'
      }
    });

    await modal.present();

    // La data que se envia desde el hijo al padre aparece recien cuando se cierra por completo el modal
    //  const { data } = await modal.onDidDismiss();
    
    // La data que se envia desde el hijo al padre aparece antes de cerrar el modal
    const { data } = await modal.onWillDismiss();
    
    console.log('data: ', data);
  }

}
