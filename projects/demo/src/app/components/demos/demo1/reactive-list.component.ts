import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PackageConfig } from '../../../../../../cargo-domain/src/kn/models/Package.config';
import { ItemConfig } from '../../../../../../cargo-domain/src/kn/models/Item.config';
import { ItemExample } from '../../../../../models/item-example';
import { replaceItem } from '../../../actions/item-actions';
import { AppState } from '../../../app.state';
import { Contract } from '../../../../../models/contract';
import { replaceContract } from '../../../actions/contract-actions';
import { Subject } from 'rxjs';
import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { Result } from '../../../../../models/result';

@Component({
    selector: 'demo-1-component-example',
    templateUrl: './reactive-list.component.html',
    styleUrls: ['./reactive-list.component.scss']
})
export class ReactiveListComponent implements OnInit {

    static label = 'Material Design';

    packageConfig: PackageConfig;
    packageConfig2: PackageConfig;
    packageConfig3: PackageConfig;
    itemConfig: ItemConfig;
    itemConfig2: ItemConfig;
    itemConfig3: ItemConfig;

    items$ = this.store.pipe(select(state => state.items));
    results$ = this.store.pipe(select(state => state.results));
    contracts$ = this.store.pipe(select(state => state.contracts));

    currentContext$ = new Subject<Item>();

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

    onItemSelected(item: ItemExample) {
        this.store.dispatch(replaceItem({item: {...item, isSelected: !item.isSelected}}));
    }

    onContractSelected(contract: Contract) {
        this.store.dispatch(replaceContract({contract: {...contract, isSelected: !contract.isSelected}}));
    }

    onMouseOver(item: Item) {
        console.log(JSON.stringify(item));
        this.currentContext$.next(item);
    }

    getTypeOf(item: Item | Contract | Result) {
        return 'TEMP';
    }
}

