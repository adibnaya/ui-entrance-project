import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuToggle: boolean;
  constructor(){
    this.menuToggle = true;
  }

  toggleMenu(){
    this.menuToggle = !this.menuToggle;
  }
}
