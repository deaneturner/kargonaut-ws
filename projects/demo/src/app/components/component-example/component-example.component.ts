import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../cargo-domain/src/models/Package.config';
import { ItemConfig } from '../../../../../cargo-domain/src/models/Item.config';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
// import {
//   appendItem,
//     replaceItem,
//     deleteItem,
//     editItem,
//     cancelItem
// } from '../../actions/item-actions';
// import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'demo-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.less']
})
export class ComponentExampleComponent implements OnInit {

  static label = 'Components';

  packageConfig: PackageConfig;
  itemConfig: ItemConfig;

  items$ = this.store.pipe(select(state => state.items));
  // editItemTag$ = this.store.pipe(select('tag'));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.packageConfig = {
      cnLabel: 'Package Component',
      cnLayout: {
        cnColumns: ['30px', 'auto', '60px']
      }
    };
    this.itemConfig = {
      cnData: this.items$,
      cnLayout: {
        cnColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
      }
    };
  }

  get label() {
    return ComponentExampleComponent.label;
  }
}

