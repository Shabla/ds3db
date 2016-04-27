import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component} from 'angular2/core';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {ItemsComponent} from '../items/items.component';
import {ItemService} from '../item/item.service';
import {ItemDetailComponent} from '../item-detail/item-detail.component';

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		ItemService
	],
	styleUrls: ['app/app/app.component.css'],
	templateUrl: 'app/app/app.component.html'
})
@RouteConfig([
	{
		path: '/items',
		name: 'Items',
		component: ItemsComponent
	}, {
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	}, {
		path: '/item/:id',
		name: 'ItemDetail',
		component: ItemDetailComponent
	}
])
export class AppComponent {
	title = 'title';
}
