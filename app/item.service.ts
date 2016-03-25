import {Injectable} from 'angular2/core';
import {Item} from './item';
import {ITEMS} from './mock-items';

@Injectable()
export class ItemService {
	getItem(id: number) {
		return Promise.resolve(ITEMS).then(
			items => items.filter(item => item.id === id)[0]
		);
	}

	getItems() {
		return Promise.resolve(ITEMS);
	}

	getItemsSlowly() {
		return new Promise<Item[]>(resolve =>
			setTimeout(() => resolve(ITEMS), 2000) // 2 seconds
		);
	}
}
