import {
    Component,
    ContentChild,
    Input, OnDestroy,
    OnInit,
    TemplateRef
} from '@angular/core';
import { PackageConfig } from '../../models/Package.config';
import { ItemConfig } from '../../models/Item.config';
import { ListItemDirective } from '../../directives/list-item/list-item.directive';
import { Item } from '../../models/Item';
import { Subscription } from 'rxjs';

@Component({
    selector: 'kn-package-component',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.less']
})
export class PackageComponent implements OnInit, OnDestroy {

    @Input()
    label: string;

    @Input()
    count: number;

    @Input()
    config: PackageConfig | any;

    @Input()
    itemConfig: ItemConfig | any;

    @ContentChild('kn-select-package-header', {static: false})
    packageHeader;

    @ContentChild(ListItemDirective, {static: false, read: TemplateRef})
    listItemTemplate;

    items: Item[];

    subscription: Subscription;

    constructor() {
    }

    // TODO: pipe instead of subscribe

    ngOnInit() {
        this.subscription = this.itemConfig && this.itemConfig.knData.subscribe((data) => {
            this.items = data;
        });
    }

    isCollapsed() {
        // return false;
       return ((this.items.length <= this.config.knLayout.knMaxCollapse) || this.config.knLayout.knIsExpanded);
    }

    expand($event) {
        this.config.knLayout.knIsExpanded = true;
        $event.stopPropagation();
    }

    collapse($event) {
        this.config.knLayout.knIsExpanded = false;
        $event.stopPropagation();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
