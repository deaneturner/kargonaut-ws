import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { ItemConfig } from '../../../../../../../cargo-domain/src/kn/models/Item.config';
import { PackageComponent } from '../../../../../../../cargo-domain/src/kn/components/package/package.component';
import { ItemExample } from '../../../../../../models/item-example';

@Component({
    selector: 'demo-reactive-list-item2',
    templateUrl: './reactive-list-item2.component.html',
    styleUrls: ['./reactive-list-item2.component.scss'],
})
export class ReactiveListItem2Component implements OnInit {

    @Input()
    item: ItemExample;

    @Input()
    config: ItemConfig;

    @Output()
    selected: EventEmitter<ItemExample> = new EventEmitter();

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