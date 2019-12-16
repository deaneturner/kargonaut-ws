import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.less']
})
export class PackageComponent {
  @Input() src: string;
  @Input() caption: string;
}
