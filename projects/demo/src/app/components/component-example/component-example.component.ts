import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../cargo-domain/src/models/Package.config';
import { ItemConfig } from '../../../../../cargo-domain/src/models/Item.config';
import { Item } from '../../../../../cargo-domain/src/models/Item';
import { items } from '../../../assets/data/items';

@Component({
  selector: 'demo-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.less']
})
export class ComponentExampleComponent implements OnInit {

  static label = 'Component';

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
      cnLayout: {
        cnColumns: ['30px', 'auto', '60px']
      }
    };
    this.itemConfig = {
      cnData: this.items,
      cnLayout: {
        cnColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
      }
    };
  }

  get label() {
    return ComponentExampleComponent.label;
  }
}
