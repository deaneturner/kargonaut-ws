import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PackageConfig } from '../../../../../cargo-domain/src/kn/models/Package.config';
import { ItemConfig } from '../../../../../cargo-domain/src/kn/models/Item.config';
import { Item } from '../../../../../cargo-domain/src/kn/models/Item';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ItemExample } from '../../../../models/item-example';
import { Contract } from '../../../../models/contract';

@Component({
  selector: 'demo-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.less']
})
export class TemplateExampleComponent implements OnInit {

  static label = 'Templates';

  @Output()
  selected: EventEmitter<Contract> = new EventEmitter();

  packageConfig: PackageConfig;
  packageConfigSingle: PackageConfig;
  itemConfig: ItemConfig;

  items$: Observable<Item[]> = this.store.pipe(select(state => state.items));

  layout = {
    selected: {
      true: 'check_box',
      false: 'check_box_outline_blank'
    }
  };

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

  onSelect(item: ItemExample) {
    item.isSelected = !item.isSelected;
    this.selected.emit(item);
  }
}
