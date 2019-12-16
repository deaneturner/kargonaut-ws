import { Component } from '@angular/core';
import { examples } from './examples';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Cargonaut';

  showNav: boolean;
  examples = examples;
}
