import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-basic-styling-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.less']
})
export class DirectivesExampleComponent implements OnInit {

  static label = 'Directives';

  constructor() { }

  ngOnInit() {
  }

}
