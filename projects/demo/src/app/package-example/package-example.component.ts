import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../cargo-domain/src/models/Package.config';
import { ItemExample } from '../../../models/item-example';

@Component({
  selector: 'demo-package-example',
  templateUrl: './package-example.component.html',
  styleUrls: ['./package-example.component.less']
})
export class PackageExampleComponent implements OnInit {

  config: PackageConfig;

  itemColumns: string[] = [];

  itemExample: ItemExample = {
    cnTag: '',
    cnLabel: 'Item row',
    cnDescription: '',
    isSelected: false,
    checkbox: 'check_box_outline_blank',
    symbol: 'adjust',
    maxLikes: '',
    weightCode: 'filter_1',
    weightSymbol: 'device_unknown',
    weightAmount: '5.0'
  };

  itemContext = {
    item: this.itemExample
  };

  constructor() { }

  ngOnInit() {
    this.config = {
      cnLabel: 'Package Component',
      cnColumns: ['30px', 'auto', '60px']
    };
    this.itemColumns = ['30px', '30px', 'auto', '60px', '30px', '30px', '60px'];
  }

}
