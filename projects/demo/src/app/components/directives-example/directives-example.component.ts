import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-basic-styling-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.less']
})
export class DirectivesExampleComponent implements OnInit {

  static label = 'Directives';

  packageColumns: string[] = [];
  itemColumns: string[] = [];

  constructor() { }

  ngOnInit() {
    this.packageColumns = ['30px', 'auto', '60px'];
    this.itemColumns = ['30px', '30px', 'auto', '60px', '30px', '30px', '60px'];
  }

  get label() {
    return DirectivesExampleComponent.label;
  }
}
