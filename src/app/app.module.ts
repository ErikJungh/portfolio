import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { EjButtonComponent } from './components/ej-button/ej-button.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HistoryComponent } from './components/history/history.component';
import { ScrollDownComponent } from './components/scroll-down/scroll-down.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, EjButtonComponent, HeaderComponent, AboutComponent, HistoryComponent, ScrollDownComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
