import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output()
  selected: EventEmitter<Contract> = new EventEmitter();

  layout = {
    selected: {
      true: 'check_box',
      false: 'check_box_outline_blank'
    }};

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.item.isSelected = !this.item.isSelected;
    this.selected.emit(this.item);
    console.log(this.item);
  }
}
