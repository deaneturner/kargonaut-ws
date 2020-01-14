import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Contract } from '../../../../../../models/contract';
import { PackageComponent } from '../../../../../../../cargo-domain/src/kn/components/package/package.component';

@Component({
  selector: 'demo-reactive-list-item',
  templateUrl: './reactive-list-item.component.html',
  styleUrls: ['./reactive-list-item.component.scss'],
})
export class ReactiveListItemComponent implements OnInit {

  @Input()
  item: Contract;

  @Output()
  selected: EventEmitter<Contract> = new EventEmitter();

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
