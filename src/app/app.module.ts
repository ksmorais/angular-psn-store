import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarddComponent } from './components/cardd/cardd.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/cardd/card-label/card-label.component';
import { CardPriceComponent } from './components/cardd/card-price/card-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarddComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
