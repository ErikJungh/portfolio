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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectedDirective } from './directives/selected.directive';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AnimateDivDirective } from './directives/animate-div.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    EjButtonComponent,
    HeaderComponent,
    AboutComponent,
    HistoryComponent,
    ScrollDownComponent,
    SelectedDirective,
    AchievementsComponent,
    AnimateDivDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
