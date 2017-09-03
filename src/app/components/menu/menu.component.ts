import { Component } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    {name:"Home" , icon: "ico-home"},
    {name:"Workflow" , icon: "ico-workflow"},
    {name:"Statistics" , icon: "ico-statistics"},
    {name:"Calendar" , icon: "ico-calendar"},
    {name:"Users" , icon: "ico-users"},
    {name:"Settings" , icon: "ico-settings"}
    ]
}
