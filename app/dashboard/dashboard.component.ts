import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {ItemService} from '../item/item.service';
import {Item} from '../item/item';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	items: Item[] = [];

	constructor(
		private _itemService: ItemService,
		private _router: Router
	) {};

	ngOnInit() {
		this._itemService.getItems()
			.then(items => this.items = items.slice(0, 4));
	}

	goToDetail(item) {
		let link = ['ItemDetail', {id: item.id}];
		this._router.navigate(link);
	}
}
