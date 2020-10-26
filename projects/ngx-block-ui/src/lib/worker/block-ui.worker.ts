import {ComponentRef, Injectable} from '@angular/core';
import {BlockUiComponent} from '../component/block-ui.component';
import {FactoryWorker} from '@vlah.io/ngx-worker';

@Injectable({
  providedIn: 'root'
})
export class BlockUiWorker {
  constructor(private factoryWorker: FactoryWorker) {
  }

  display(container?: HTMLElement): ComponentRef<BlockUiComponent> {
    const compRef = this.factoryWorker.make(BlockUiComponent);
    compRef.instance.container = container;
    this.factoryWorker.glue(compRef, {append: true, container});

    return compRef;
  }

  destroy(compRef: ComponentRef<BlockUiComponent>): void {
    this.factoryWorker.destroy(compRef);
  }
}
