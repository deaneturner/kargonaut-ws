import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../cargo-domain/src/models/Package.config';
import { ItemConfig } from '../../../../cargo-domain/src/models/Item.config';
import { items } from '../../assets/data/items';

@Component({
  selector: 'demo-package-example',
  templateUrl: './package-example.component.html',
  styleUrls: ['./package-example.component.less']
})
export class PackageExampleComponent implements OnInit {

  packageConfig: PackageConfig;
  itemConfig: ItemConfig;

  constructor() { }

  ngOnInit() {
    this.packageConfig = {
      cnData: {
        cnLabel: 'Package Component',
      },
      cnColumns: ['30px', 'auto', '60px']
    };
    this.itemConfig = {
      cnData: items[0],
      cnColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
    };
  }

}
