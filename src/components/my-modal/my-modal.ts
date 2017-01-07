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

  dismiss() {
    let loading: Loading = this.loadingController.create({
      dismissOnPageChange: true
    });

    loading.present().then(() => {
      // Do some stuff

      this.viewController.dismiss(() => {
        // => Modal is now closed but Loading hangs
      });
    });
  }
}
