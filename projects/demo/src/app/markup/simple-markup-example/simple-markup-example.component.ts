import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-simple-markup-example',
  templateUrl: './simple-markup-example.component.html',
  styleUrls: ['./simple-markup-example.component.less']
})
export class SimpleMarkupExampleComponent implements OnInit {

  static label = 'Simple Markup';

  constructor() { }

  ngOnInit() {
  }

  get label() {
    return SimpleMarkupExampleComponent.label;
  }
}
