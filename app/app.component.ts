import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component} from 'angular2/core';

import {DashboardComponent} from './dashboard.component';
import {ItemsComponent} from './items.component';
import {ItemService} from './item.service';
import {ItemDetailComponent} from './item-detail.component';

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		ItemService
	],
	styleUrls: ['app/app.component.css'],
	templateUrl: 'app/app.component.html'
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
	title = 'Dark Souls 3 Database';
}
