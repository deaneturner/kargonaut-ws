import { Component, Input, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../../../cargo-domain/src/kn/models/Package.config';

@Component({
    selector: 'demo-package-header-example',
    templateUrl: './package-header-example.component.html',
    styleUrls: ['./package-header-example.component.less']
})
export class PackageHeaderExampleComponent implements OnInit {

    @Input()
    label: string;

    @Input()
    layout: any;

    @Input()
    data: any;

    @Input()
    config: PackageConfig;

    constructor() {
    }

    ngOnInit() {
    }
}
