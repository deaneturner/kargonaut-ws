import { Component, Input, OnInit } from '@angular/core';
import { PackageConfig } from '../../../models/Package.config';

@Component({
    selector: 'cn-template-component',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.less']
})
export class PackageComponent implements OnInit {

    @Input()
    config: PackageConfig | any;

    constructor() {
    }

    ngOnInit() {
    }

}
