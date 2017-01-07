import { Component } from '@angular/core';
import { ViewController, Loading, LoadingController } from "ionic-angular";

@Component({
  selector: 'my-modal',
  templateUrl: 'my-modal.html'
})
export class MyModalComponent {

  constructor(public viewController: ViewController,
              public loadingController: LoadingController) {
  }

  dismiss1() {
    let loading: Loading = this.loadingController.create({
      dismissOnPageChange: true
    });

    loading.present().then(() => {
      this.viewController.dismiss();
    });
  }

  dismiss2() {
    let loading: Loading = this.loadingController.create();

    loading.present().then(() => {
      this.viewController.dismiss().then(() => loading.dismissAll());
    });
  }
}
