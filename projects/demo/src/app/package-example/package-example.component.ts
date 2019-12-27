import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../cargo-domain/src/models/Package.config';
import { ItemConfig } from '../../../../cargo-domain/src/models/Item.config';
import { items } from '../../assets/data/items';
import { Item } from '../../../../cargo-domain/src/models/Item';

@Component({
  selector: 'demo-package-example',
  templateUrl: './package-example.component.html',
  styleUrls: ['./package-example.component.less']
})
export class PackageExampleComponent implements OnInit {

  static label = 'Package: Component, Template, and Directive';

  packageConfig: PackageConfig;
  itemConfig: ItemConfig;

  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = items;
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

  get label() {
    return PackageExampleComponent.label;
  }
}
