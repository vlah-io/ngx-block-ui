import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-block-ui',
  templateUrl: './block-ui.component.html'
})
export class BlockUiComponent {
  @Input() container?: HTMLElement;
}
