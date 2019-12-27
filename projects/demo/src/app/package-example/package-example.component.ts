import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../cargo-domain/src/models/Package.config';

@Component({
  selector: 'demo-package-example',
  templateUrl: './package-example.component.html',
  styleUrls: ['./package-example.component.less']
})
export class PackageExampleComponent implements OnInit {

  config: PackageConfig;

  itemColumns: string[] = [];

  constructor() { }

  ngOnInit() {
    this.config = {
      label: 'Package Component',
      columns: ['30px', 'auto', '60px']
    };
    this.itemColumns = ['30px', '30px', 'auto', '60px', '30px', '30px', '60px'];
  }

}
