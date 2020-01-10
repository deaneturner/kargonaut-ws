import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { ItemConfig } from '../../../../../../../cargo-domain/src/kn/models/Item.config';
import { Contract } from '../../../../../../models/contract';
import { PackageComponent } from '../../../../../../../cargo-domain/src/kn/components/package/package.component';

@Component({
  selector: 'demo-item-example',
  templateUrl: './item-example.component.html',
  styleUrls: ['./item-example.component.less'],
})
export class ItemExampleComponent implements OnInit {

  @Input()
  item: Contract;

  @Input()
  config: ItemConfig;

  @Output()
  selected: EventEmitter<Contract> = new EventEmitter();

  layout = {
    selected: {
      true: 'check_box',
      false: 'check_box_outline_blank'
    }
  };

  parentComponent: PackageComponent;

  constructor(private injector: Injector) {
    this.parentComponent = this.injector.get(PackageComponent);
  }

  ngOnInit() {
  }

  onSelect() {
    this.item.isSelected = !this.item.isSelected;
    this.selected.emit(this.item);
  }
}
