import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-package-example',
  templateUrl: './package-example.component.html',
  styleUrls: ['./package-example.component.less']
})
export class PackageExampleComponent implements OnInit {

  static label = 'Package Component';

  constructor() { }

  ngOnInit() {
  }

}
