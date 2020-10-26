import {DisplayOptionsInterface as ErrorBoxOptions} from '@vlah.io/ngx-error-box';
import {ComponentRef} from '@angular/core';
import {BlockUiComponent} from '../component/block-ui.component';
import {DisplayOptionsInterface as SuccessBoxOptions} from '@vlah.io/ngx-success-box';

export interface ErrorOptions extends ErrorBoxOptions {
  compRef?: ComponentRef<BlockUiComponent>;
}

export interface SuccessOptions extends SuccessBoxOptions {
  compRef?: ComponentRef<BlockUiComponent>;
}
