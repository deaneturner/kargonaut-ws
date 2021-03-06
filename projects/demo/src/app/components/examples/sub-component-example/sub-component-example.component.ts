import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PackageConfig } from '../../../../../../cargo-domain/src/kn/models/Package.config';
import { ItemConfig } from '../../../../../../cargo-domain/src/kn/models/Item.config';
import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { Tag } from '../../../../../../cargo-domain/src/common/TagGenerator';
import { AppState } from '../../../app.state';
import { appendItem, deleteItem } from '../../demos/actions/item.actions';

@Component({
    selector: 'demo-component-example',
    templateUrl: './sub-component-example.component.html',
    styleUrls: ['./sub-component-example.component.scss']
})
export class SubComponentExampleComponent implements OnInit {

    static label = 'Sub Components';

    packageConfig: PackageConfig;
    packageConfigCollapsed: PackageConfig;
    itemConfig: ItemConfig;

    items$ = this.store.pipe(select(state => state.example_contracts));

    // editItemTag$ = this.store.pipe(select('tag'));

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
    }

    doAppendItem(item: Item) {
        this.store.dispatch(appendItem({
            item
        }));
    }

    doDeleteItem(knTag: Tag) {
        this.store.dispatch(deleteItem({
            knTag
        }));
    }

    get label() {
        return SubComponentExampleComponent.label;
    }
}

