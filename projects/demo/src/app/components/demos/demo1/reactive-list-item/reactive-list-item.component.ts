import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { ItemConfig } from '../../../../../../../cargo-domain/src/kn/models/Item.config';
import { Contract } from '../../../../../../models/contract';
import { PackageComponent } from '../../../../../../../cargo-domain/src/kn/components/package/package.component';
import { PackageMaterialComponent } from '../../../../../../../cargo-domain/src/kn/components/package-material/package-material.component';

@Component({
  selector: 'demo-reactive-list-item',
  templateUrl: './reactive-list-item.component.html',
  styleUrls: ['./reactive-list-item.component.scss'],
})
export class ReactiveListItemComponent implements OnInit {

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
    this.parentComponent = this.injector.get(PackageMaterialComponent);
  }

  ngOnInit() {
  }

  onSelect() {
    this.item.isSelected = !this.item.isSelected;
    this.selected.emit(this.item);
  }
}
