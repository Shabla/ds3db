import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Item} from '../item/item';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {ItemService} from '../item/item.service';

@Component({
	selector: 'my-items',
	directives: [ItemDetailComponent],
	styleUrls: ['app/items.component/items.component.css'],
	templateUrl: 'app/items.component/items.component.html'
})
export class ItemsComponent implements OnInit {
	public items: Item[];
	selectedItem: Item;

	constructor(
		private _itemService: ItemService,
		private _router: Router
	) {}

	ngOnInit() {
		this.getItems();
	}

	getItems() {
		this._itemService.getItems().then(items => this.items = items);
	}

	onSelect(item: Item) {
		this.selectedItem = item;
	}

	goToDetail() {
		this._router.navigate(['ItemDetail', {id: this.selectedItem.id}]);
	}
}
