import {Component} from '@angular/core';
import {BlockUiWorker} from '../../../ngx-block-ui/src/lib/service/block-ui.worker';
import {BlockUiLifecycleWorker} from '../../../ngx-block-ui/src/lib/service/block-ui-lifecycle.worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-block-ui-test';

  constructor(private blockUiFactoryWorker: BlockUiWorker,
              private blockUiLifecycleFactoryWorker: BlockUiLifecycleWorker) {
  }

  show(container?: HTMLElement): void {
    const compRef = this.blockUiFactoryWorker.display(container);
    setTimeout(
      () => this.blockUiFactoryWorker.destroy(compRef),
      2000
    );
  }

  lifecycle(container?: HTMLElement): void {
    let compRef = this.blockUiLifecycleFactoryWorker.loading(container);
    setTimeout(
      () => {
        this.blockUiLifecycleFactoryWorker.error(
          {
            message: 'Some error message!',
            errors: []
          },
          {container, compRef}
        );
        setTimeout(
          () => {
            this.blockUiLifecycleFactoryWorker.onDestroy();
            compRef = this.blockUiLifecycleFactoryWorker.loading(container);
            setTimeout(
              () => {
                this.blockUiLifecycleFactoryWorker.success(
                  'Some success message!',
                  {container, compRef}
                );
                setTimeout(
                  () => this.blockUiLifecycleFactoryWorker.onDestroy(), 2000
                );
              }, 2000
            );
          }, 2000
        );
      }, 2000
    );
  }
}
