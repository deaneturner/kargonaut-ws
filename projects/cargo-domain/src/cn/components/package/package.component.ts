import { Component, Input, OnInit } from '@angular/core';
import { PackageConfig } from '../../../models/Package.config';
import { ItemConfig } from '../../../models/Item.config';

@Component({
    selector: 'cn-package-component',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.less']
})
export class PackageComponent implements OnInit {

    @Input()
    config: PackageConfig | any;

    @Input()
    itemConfig: ItemConfig | any;

    constructor() {

    }

    ngOnInit() {
        console.log(this.itemConfig);
    }
}
