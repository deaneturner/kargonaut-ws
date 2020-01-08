import { Component, Input, OnInit } from '@angular/core';
import { Contract } from '../../../../models/contract';
import { ItemConfig } from '../../../../../cargo-domain/src/models/Item.config';

@Component({
  selector: 'demo-item-example',
  templateUrl: './item-example.component.html',
  styleUrls: ['./item-example.component.less']
})
export class ItemExampleComponent implements OnInit {

  @Input()
  item: Contract;

  @Input()
  itemConfig: ItemConfig;

  constructor() { }

  ngOnInit() {
  }

}
