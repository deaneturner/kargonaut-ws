import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-package-component',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.less']
})
export class PackageComponent implements OnInit {

  packageColumns: string[] = [];
  itemColumns: string[] = [];

  constructor() { }

  ngOnInit() {
    this.packageColumns = ['30px', 'auto', '60px'];
    this.itemColumns = ['30px', '30px', 'auto', '60px', '30px', '30px', '60px'];
  }

}
