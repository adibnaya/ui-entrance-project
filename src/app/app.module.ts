import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingComponent } from "./components/greeting/greeting.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { BigComponent } from "./components/big/big.component";
import { SmallComponent } from "./components/small/small.component";

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    HeaderComponent,
    MenuComponent,
    BigComponent,
    SmallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
