import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Input,
    OnInit,
    TemplateRef
} from '@angular/core';
import { PackageConfig } from '../../../models/Package.config';
import { ItemConfig } from '../../../models/Item.config';
import { ListItemDirective } from '../../directives/list-item/list-item.directive';
import { Item } from '../../../models/Item';

@Component({
    selector: 'cn-package-component',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.less']
})
export class PackageComponent implements OnInit {

    @Input()
    label: string;

    @Input()
    count: number;

    @Input()
    config: PackageConfig | any;

    @Input()
    itemConfig: ItemConfig | any;

    @ContentChild(ListItemDirective, {static: false, read: TemplateRef})
    listItemTemplate;

    items: Item[];

    constructor() {
    }

    ngOnInit() {
        const subscription = this.itemConfig.cnData.subscribe((data) => {
            this.items = data;
        });
    }

    collapse() {
        // return false;
       return ((this.items.length <= this.config.cnLayout.cnMaxNoCollapse) || this.config.cnLayout.cnIsExpanded);
    }

    expand() {
        this.config.cnLayout.cnIsExpanded = true;
    }
}
