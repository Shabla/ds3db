import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Item} from '../item/item';
import {ItemService} from '../item/item.service';

@Component({
	selector: 'item-detail',
	styleUrls: ['app/item-detail/item-detail.component.css'],
	templateUrl: 'app/item-detail/item-detail.component.html'
})

export class ItemDetailComponent implements OnInit {
	item: Item;

	constructor(
		private _itemService: ItemService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._itemService.getItem(id)
			.then(item => this.item = item);
	}

	goBack() {
		window.history.back();
	}
}
