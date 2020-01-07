import { Component, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../cargo-domain/src/models/Package.config';
import { ItemConfig } from '../../../../../cargo-domain/src/models/Item.config';
import { Item } from '../../../../../cargo-domain/src/models/Item';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'demo-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.less']
})
export class TemplateExampleComponent implements OnInit {

  static label = 'Templates';
  packageConfig: PackageConfig;
  itemConfig: ItemConfig;

  items$: Observable<Item[]> = this.store.pipe(select(state => state.items));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.packageConfig = {
      cnLabel: 'Package Component',
      cnCount: 4,
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
    return TemplateExampleComponent.label;
  }
}
