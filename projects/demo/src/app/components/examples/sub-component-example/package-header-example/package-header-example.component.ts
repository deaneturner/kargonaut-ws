import { Component, Injector, Input, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../../../cargo-domain/src/kn/models/Package.config';
import { PackageComponent } from '../../../../../../../cargo-domain/src/kn/components/package/package.component';

@Component({
    selector: 'demo-package-header-example',
    templateUrl: './package-header-example.component.html',
    styleUrls: ['./package-header-example.component.scss']
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

    parentComponent: PackageComponent;

    constructor(private injector: Injector) {
        this.parentComponent = this.injector.get(PackageComponent);
    }

    ngOnInit() {
    }
}
