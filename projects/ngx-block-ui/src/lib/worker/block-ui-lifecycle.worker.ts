import {ComponentRef, Injectable} from '@angular/core';
import {BlockUiComponent} from '../component/block-ui.component';
import {ErrorBoxComponent, ErrorBoxInterface, ErrorBoxWorker} from '@vlah.io/ngx-error-box';
import {BlockUiWorker} from './block-ui.worker';
import {SuccessBoxComponent, SuccessBoxWorker} from '@vlah.io/ngx-success-box';
import {FactoryWorker} from '@vlah.io/ngx-worker';
import {ErrorOptions, SuccessOptions} from '../interface/ngx-block-ui.interface';

@Injectable({
  providedIn: 'root'
})
export class BlockUiLifecycleWorker {
  compRefArray: ComponentRef<BlockUiComponent | ErrorBoxComponent | SuccessBoxComponent>[];

  constructor(private blockUiFactoryWorker: BlockUiWorker,
              private errorBoxFactoryWorker: ErrorBoxWorker,
              private successBoxFactoryWorker: SuccessBoxWorker,
              private factoryWorker: FactoryWorker) {
    this.compRefArray = [];
  }

  loading(container?: HTMLElement): ComponentRef<BlockUiComponent> {
    const compRef = this.blockUiFactoryWorker.display(container);
    this.compRefArray.push(compRef);
    return compRef;
  }

  error(error: ErrorBoxInterface,
        options?: ErrorOptions
  ): ComponentRef<ErrorBoxComponent> {
    const {compRef} = options;
    if (compRef) {
      this.blockUiFactoryWorker.destroy(compRef);
    }

    const errorCompRef = this.errorBoxFactoryWorker.render(error, options);
    this.compRefArray.push(errorCompRef);
    return errorCompRef;
  }

  success(message: string,
          options?: SuccessOptions
  ): ComponentRef<SuccessBoxComponent> {
    const {compRef} = options;
    if (compRef) {
      this.blockUiFactoryWorker.destroy(compRef);
    }

    const successCompRef = this.successBoxFactoryWorker.render(message, options);
    this.compRefArray.push(successCompRef);
    return successCompRef;
  }

  // Use this when you want a full clean-up from inside the component at destroy
  onDestroy(): void {
    this.compRefArray.forEach(
      (compRef: ComponentRef<BlockUiComponent | ErrorBoxComponent | SuccessBoxComponent>) => {
        this.factoryWorker.destroy(compRef);
      }
    );
  }
}
