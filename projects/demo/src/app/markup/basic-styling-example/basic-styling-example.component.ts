import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-basic-styling-example',
  templateUrl: './basic-styling-example.component.html',
  styleUrls: ['./basic-styling-example.component.less']
})
export class BasicStylingExampleComponent implements OnInit {

  static label = 'Basic Styling';

  constructor() { }

  ngOnInit() {
  }

}
