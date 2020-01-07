import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../cargo-domain/src/models/Package.config';
import { ItemConfig } from '../../../../../cargo-domain/src/models/Item.config';
import { items } from '../../../assets/data/items';
import { Item } from '../../../../../cargo-domain/src/models/Item';

@Component({
  selector: 'demo-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.less']
})
export class TemplateExampleComponent implements OnInit {

  static label = 'Templates';
  packageConfig: PackageConfig;
  itemConfig: ItemConfig;

  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = items;
    this.packageConfig = {
      cnLabel: 'Package Component',
      cnCount: 4,
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
    return TemplateExampleComponent.label;
  }
}
