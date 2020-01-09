import { Component, Injector, Input, OnInit } from '@angular/core';
import { PackageConfig } from '../../../models/Package.config';
import { PackageComponent } from '../package.component';

@Component({
    selector: 'kn-package-header',
    templateUrl: './package-header.component.html',
    styleUrls: ['./package-header.component.less']
})
export class PackageHeaderComponent implements OnInit {

    @Input()
    label: string;

    @Input()
    layout: any;

    @Input()
    data: any;

    @Input()
    config: PackageConfig;

    parentComponent: PackageComponent;

    constructor(private injector: Injector) {
        this.parentComponent = this.injector.get(PackageComponent);
    }

    ngOnInit() {
    }
}
