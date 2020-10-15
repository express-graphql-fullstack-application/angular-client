import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuBarComponent } from './main-menu-bar/main-menu-bar.component';
import { SideMenuBarComponent } from './side-menu-bar/side-menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuBarComponent,
    SideMenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
