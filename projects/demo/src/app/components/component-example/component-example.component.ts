import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../cargo-domain/src/models/Package.config';
import { ItemConfig } from '../../../../../cargo-domain/src/models/Item.config';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Item } from '../../../../../cargo-domain/src/models/Item';
import { Tag } from '../../../../../cargo-domain/src/common/TagGenerator';
import {
    appendItem,
    deleteItem,
} from '../../actions/item-actions';
import { of } from 'rxjs/internal/observable/of';

// import { async } from 'rxjs/internal/scheduler/async';

@Component({
    selector: 'demo-component-example',
    templateUrl: './component-example.component.html',
    styleUrls: ['./component-example.component.less']
})
export class ComponentExampleComponent implements OnInit {

    static label = 'Components';

    packageConfig: PackageConfig;
    packageConfig2: PackageConfig;
    itemConfig: ItemConfig;
    itemConfigEmpty: ItemConfig;

    items$ = this.store.pipe(select(state => state.items));

    // editItemTag$ = this.store.pipe(select('tag'));

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.packageConfig = {
            cnLabel: 'Package Component',
            cnLayout: {
                cnColumns: ['30px', 'auto', '60px'],
                cnMaxNoCollapse: 4
            }
        };
        this.packageConfig2 = {
            cnLabel: 'Package Component - Collapsed',
            cnLayout: {
                cnColumns: ['30px', 'auto', '60px'],
                cnMaxNoCollapse: 3
            }
        };
        this.itemConfig = {
            cnData: this.items$,
            cnLayout: {
                cnColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
            }
        };
        this.itemConfigEmpty = {
            cnData: of<Item[]>([]),
            cnLayout: {
                cnColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
            }
        };
    }

    doAppendItem(item: Item) {
        this.store.dispatch(appendItem({
            item
        }));
    }

    doDeleteItem(cnTag: Tag) {
        this.store.dispatch(deleteItem({
            cnTag
        }));
    }

    get label() {
        return ComponentExampleComponent.label;
    }
}

