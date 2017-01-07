import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { MyModalComponent } from '../../components/my-modal/my-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {

  }

  presentContactModal() {
    let contactModal = this.modalCtrl.create(MyModalComponent);
    contactModal.present();
  }

}
