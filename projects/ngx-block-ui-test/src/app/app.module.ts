import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxBlockUiModule} from '../../../ngx-block-ui/src/lib/ngx-block-ui.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBlockUiModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
