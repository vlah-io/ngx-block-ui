import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlockUiComponent} from './component/block-ui.component';
import {NgxLoadingModule} from '@vlah.io/ngx-loading';
import {ErrorBoxComponent, NgxErrorBoxModule} from '@vlah.io/ngx-error-box';
import {NgxSuccessBoxModule, SuccessBoxComponent} from '@vlah.io/ngx-success-box';


@NgModule({
  imports: [
    CommonModule,
    NgxLoadingModule,
    NgxErrorBoxModule,
    NgxSuccessBoxModule
  ],
  declarations: [
    BlockUiComponent
  ],
  exports: [
    BlockUiComponent
  ],
  entryComponents: [
    BlockUiComponent,
    ErrorBoxComponent,
    SuccessBoxComponent
  ]
})
export class NgxBlockUiModule {
}
