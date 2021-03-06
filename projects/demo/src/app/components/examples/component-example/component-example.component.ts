import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PackageConfig } from '../../../../../../cargo-domain/src/kn/models/Package.config';
import { ItemConfig } from '../../../../../../cargo-domain/src/kn/models/Item.config';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { replaceItem } from '../../demos/actions/item.actions';
import { of } from 'rxjs/internal/observable/of';
import { ItemExample } from '../../../../../models/item-example';

@Component({
    selector: 'demo-component-example',
    templateUrl: './component-example.component.html',
    styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {

    static label = 'Components';

    @Output()
    selected: EventEmitter<Item> = new EventEmitter();

    packageConfig: PackageConfig;
    packageConfigCollapsed: PackageConfig;
    itemConfig: ItemConfig;
    itemConfigEmpty: ItemConfig;

    items$ = this.store.pipe(select(state => state.example_items));

    layout = {
        selected: {
            true: 'check_box',
            false: 'check_box_outline_blank'
        }
    };

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.packageConfig = {
            knLabel: 'Package Component',
            knLayout: {
                knColumns: ['30px', 'auto', '60px'],
                knMaxCollapse: 4
            }
        };
        this.packageConfigCollapsed = {
            knLabel: 'Package Component ( > x3 )',
            knLayout: {
                knColumns: ['30px', 'auto', '60px'],
                knMaxCollapse: 3
            }
        };
        this.itemConfig = {
            knData: this.items$,
            knLayout: {
                knColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
            }
        };
        this.itemConfigEmpty = {
            knData: of<Item[]>([]),
            knLayout: {
                knColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
            }
        };
    }

    get label() {
        return ComponentExampleComponent.label;
    }

    onSelect(item: ItemExample) {
        this.store.dispatch(replaceItem({item: {...item, isSelected: !item.isSelected}}));
        this.selected.emit(item);
    }
}

