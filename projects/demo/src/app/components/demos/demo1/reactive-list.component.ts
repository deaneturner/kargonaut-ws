import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PackageConfig } from '../../../../../../cargo-domain/src/kn/models/Package.config';
import { ItemConfig } from '../../../../../../cargo-domain/src/kn/models/Item.config';
import { AppState } from '../../../app.state';
import { Subject } from 'rxjs';
import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import * as ActionTypes from '../../../actions/action-types';

enum ItemTypes {
    'ItemExample' = 'ItemExample',
    'Contract' = 'Contract',
    'Result' = 'Result',
}

interface ItemContext {
    type: ItemTypes;
    item?: Item;
}

@Component({
    selector: 'demo-1-component-example',
    templateUrl: './reactive-list.component.html',
    styleUrls: ['./reactive-list.component.scss']
})
export class ReactiveListComponent implements OnInit {

    static label = 'Reactive Design';

    packageConfig: PackageConfig;
    packageConfig2: PackageConfig;
    packageConfig3: PackageConfig;
    itemConfig: ItemConfig;
    itemConfig2: ItemConfig;
    itemConfig3: ItemConfig;

    ItemTypes: typeof ItemTypes = ItemTypes;

    items$ = this.store.pipe(select(state => state.items));
    results$ = this.store.pipe(select(state => state.results));
    contracts$ = this.store.pipe(select(state => state.contracts));

    currentContext$ = new Subject<ItemContext>();

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.packageConfig = {
            knLabel: 'Result Group Label',
            knLayout: {
                knMaxCollapse: 4
            }
        };
        this.itemConfig = {
            knData: this.results$
        };

        this.packageConfig2 = {
            knLabel: 'Item Group Label',
            knLayout: {
                knMaxCollapse: 4
            }
        };
        this.itemConfig2 = {
            knData: this.items$,
            knLayout: {
                knColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
            }
        };

        this.packageConfig3 = {
            knLabel: 'Contract Group Label',
            knLayout: {
                knMaxCollapse: 3
            }
        };
        this.itemConfig3 = {
            knData: this.contracts$,
            knLayout: {
                knColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
            }
        };
    }

    get label() {
        return ReactiveListComponent.label;
    }

    onSelected(itemContext: ItemContext) {
        let actionContext;
        switch (itemContext.type) {
            case ItemTypes.ItemExample: {
                actionContext = {
                    action: 'replaceItem',
                    key: 'item'
                };
                break;
            }
            case ItemTypes.Contract: {
                actionContext = {
                    action: 'replaceContract',
                    key: 'contract'
                };
                break;
            }
            case ItemTypes.Result: {
                actionContext = {
                    action: 'replaceResult',
                    key: 'result'
                };
                break;
            }
        }
        this.store.dispatch(ActionTypes[actionContext.action]({
            [actionContext.key] : {...itemContext.item, isSelected: !itemContext.item.isSelected}
        }));
    }

    onMouseOver(itemContext: ItemContext) {
        console.log(JSON.stringify(itemContext.item));
        this.currentContext$.next({type: itemContext.type, item: itemContext.item});
    }
}

