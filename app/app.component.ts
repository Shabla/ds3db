import {Component} from 'angular2/core';

interface Item {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	styles: [`
		.items {
			list-style-type: none;
			padding: 0;
			margin: 1em;
			width: 10em;
		}

		.item {
			height: 2em;
			line-height: 2em;
			font-sze: 1.6em;
			background-color: #ddd;
			margin: 0.5em 0;
			padding-right: 0.5em;
			border-radius: 0.2em;
		}

		.item.selected {
			background-color: yellow;
		}

		.item.selected span {
			background-color: orange;
		}

		.item span {
			background-color: #333;
			color: white;
			width: 2em;
			line-height: 2em;
			display: inline-block;
			text-align: center;
			margin-right: 0.5em;
			border-top-left-radius: 0.2em;
			border-bottom-left-radius: 0.2em;
		}

		.item:hover {
			background-color: cyan;
			cursor: pointer;
		}

		.item:hover span {
			background-color: magenta;
		}
	`],
	template: `
		<h1>{{title}}</h1>

		<ul class="items">
			<li class="item" [class.selected]="item === selectedItem" *ngFor="#item of items" (click)="onSelect(item)">
				<span>{{item.id}}</span> {{item.name}}
			</li>
		</ul>

		<div *ngIf="selectedItem">
			<h2>{{selectedItem.name}} details</h2>
			<div>
				<label>Name:</label>
				{{selectedItem.id}}
			</div>

			<div>
				<label>Name:</label>
				<input type="text" [(ngModel)]="selectedItem.name" placeholder="Item name"/>
			</div>
		</div>
	`
})
export class AppComponent {
	public title = 'Dark Souls 3 Database';
	public items = ITEMS;
	selectedItem: Item;

	onSelect(item: Item) {
		this.selectedItem = item;
	}
}

var ITEMS: Item[] = [
	{id: 11, name: 'Shortsword'},
	{id: 12, name: 'Long Sword'},
	{id: 13, name: 'Uchigatana'},
	{id: 14, name: 'Zweihander'},
	{id: 15, name: 'Bastard Sword'},
	{id: 16, name: 'Short Bow'},
	{id: 17, name: 'Long Bow'},
	{id: 18, name: 'Grand Lance'}
];
