import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-captioned-image',
  templateUrl: './captioned-image.component.html',
  styleUrls: ['./captioned-image.component.less']
})
export class CaptionedImageComponent {
  @Input() src: string;
  @Input() caption: string;
}
