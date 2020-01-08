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
  packageConfigSingle: PackageConfig;
  itemConfig: ItemConfig;

  items$: Observable<Item[]> = this.store.pipe(select(state => state.items));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.packageConfig = {
      knLabel: 'Package Component',
      knCount: 4,
      knLayout: {
        knColumns: ['30px', 'auto', '60px'],
        knMaxCollapse: 4
      }
    };
    this.packageConfigSingle = {
      knLabel: 'Package Component',
      knCount: 1,
      knLayout: {
        knColumns: ['30px', 'auto', '60px'],
        knMaxCollapse: 4
      }
    };
    this.itemConfig = {
      knData: this.items$,
      knLayout: {
        knColumns: ['30px', '30px', 'auto', '60px', '30px', '30px', '60px']
      }
    };
  }

  get label() {
    return TemplateExampleComponent.label;
  }
}
