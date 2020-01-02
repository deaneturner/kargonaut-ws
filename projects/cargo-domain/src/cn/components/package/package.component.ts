import {
    AfterContentChecked,
    Component,
    ContentChild,
    Input,
    OnInit,
    TemplateRef
} from '@angular/core';
import { PackageConfig } from '../../../models/Package.config';
import { ItemConfig } from '../../../models/Item.config';
import { ListItemDirective } from '../../directives/list-item/list-item.directive';

@Component({
    selector: 'cn-package-component',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.less']
})
export class PackageComponent implements OnInit, AfterContentChecked {

    @Input()
    config: PackageConfig | any;

    @Input()
    itemConfig: ItemConfig | any;

    @ContentChild(ListItemDirective, {static: false, read: TemplateRef})
    listItemTemplate;

    constructor() {

    }

    ngOnInit() {
    }

    ngAfterContentChecked() {
        console.log(this.listItemTemplate);
    }
}
