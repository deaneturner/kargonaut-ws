import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../../../cargo-domain/src/kn/models/Item';

@Injectable()
export class ItemsHttpService {

    constructor(private http: HttpClient) {
    }

    findAllItems(): Observable<Item[]> {
        return this.http.get('/api/item')
            .pipe(
                map(res => res['payload'])
            );
    }

    saveItem(itemId: string | number, changes: Partial<Item>) {
        return this.http.put('/api/item/' + itemId, changes);
    }
}
