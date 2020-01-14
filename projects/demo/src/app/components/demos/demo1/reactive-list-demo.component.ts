import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PackageConfig } from '../../../../../../cargo-domain/src/kn/models/Package.config';
import { ItemConfig } from '../../../../../../cargo-domain/src/kn/models/Item.config';
import { AppState } from '../../../app.state';

@Component({
    selector: 'demo-1-component-example',
    templateUrl: './reactive-list.component.html',
    styleUrls: ['./reactive-list.component.scss']
})
export class ReactiveListDemoComponent implements OnInit {

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
        return ReactiveListDemoComponent.label;
    }
}

