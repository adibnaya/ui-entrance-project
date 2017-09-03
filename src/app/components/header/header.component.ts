import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggle: EventEmitter<any> = new EventEmitter;

  menuToggle(){
    console.log('menuToggle');
    this.toggle.emit();
  }
}
