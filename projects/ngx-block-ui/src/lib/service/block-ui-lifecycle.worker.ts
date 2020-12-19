import {ComponentRef, Injectable} from '@angular/core';
import {ErrorBoxComponent, ErrorBoxInterface, ErrorBoxWorker} from '@vlah.io/ngx-error-box';
import {SuccessBoxComponent, SuccessBoxWorker} from '@vlah.io/ngx-success-box';
import {CompRefSinkWorker, FactoryWorker} from '@vlah.io/ngx-worker';
import {BlockUiComponent} from '../component/block-ui.component';
import {ErrorOptions, SuccessOptions} from '../interface/ngx-block-ui.interface';
import {BlockUiWorker} from './block-ui.worker';

@Injectable({
  providedIn: 'root'
})
export class BlockUiLifecycleWorker {
  constructor(private blockUiFactoryWorker: BlockUiWorker,
              private errorBoxFactoryWorker: ErrorBoxWorker,
              private successBoxFactoryWorker: SuccessBoxWorker,
              private factoryWorker: FactoryWorker,
              private compRefSink: CompRefSinkWorker<BlockUiComponent | ErrorBoxComponent | SuccessBoxComponent>
  ) {
  }

  loading(container?: HTMLElement): ComponentRef<BlockUiComponent> {
    const compRef = this.blockUiFactoryWorker.display(container);
    this.compRefSink.add(compRef);
    return compRef;
  }

  error(error: ErrorBoxInterface,
        options?: ErrorOptions
  ): ComponentRef<ErrorBoxComponent> {
    if (options) {
      const {compRef} = options;
      if (compRef) {
        this.blockUiFactoryWorker.destroy(compRef);
      }
    }

    const errorCompRef = this.errorBoxFactoryWorker.render(error, options);
    this.compRefSink.add(errorCompRef);
    return errorCompRef;
  }

  success(message: string,
          options?: SuccessOptions
  ): ComponentRef<SuccessBoxComponent> {
    if (options) {
      const {compRef} = options;
      if (compRef) {
        this.blockUiFactoryWorker.destroy(compRef);
      }
    }

    const successCompRef = this.successBoxFactoryWorker.render(message, options);
    this.compRefSink.add(successCompRef);
    return successCompRef;
  }

  // Use this when you want a full clean-up from inside the component at destroy
  onDestroy(): void {
    this.compRefSink.destroy();
  }
}
