import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as MenuItems from '../menu-items';

@Component({
	selector: 'rad-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	public menu = MenuItems;
	@Output() public onSidebarToggled = new EventEmitter<any>();

	constructor() {}

	ngOnInit(): void {
	}

	public closeSidebar() {
		this.onSidebarToggled.emit();
	}
}
