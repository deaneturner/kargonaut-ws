import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PackageConfig } from '../../../../../../cargo-domain/src/kn/models/Package.config';
import { ItemConfig } from '../../../../../../cargo-domain/src/kn/models/Item.config';
import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { Tag } from '../../../../../../cargo-domain/src/common/TagGenerator';
import { AppState } from '../../../app.state';
import { appendItem, deleteItem } from '../../examples/actions/item-actions';

@Component({
    selector: 'demo-1-component-example',
    templateUrl: './reactive-list.component.html',
    styleUrls: ['./reactive=list.component.less']
})
export class ReactiveListDemoComponent implements OnInit {

    static label = 'Reactive List Demo';

    packageConfig: PackageConfig;
    itemConfig: ItemConfig;

    items$ = this.store.pipe(select(state => state.contracts));

    // editItemTag$ = this.store.pipe(select('tag'));

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.packageConfig = {
            knLabel: 'Package Component',
            knLayout: {
                knMaxCollapse: 4
            }
        };
        this.itemConfig = {
            knData: this.items$
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
        return ReactiveListDemoComponent.label;
    }
}

