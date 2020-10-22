import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuBarComponent } from './main-menu-bar/main-menu-bar.component';
import { SideMenuBarComponent } from './side-menu-bar/side-menu-bar.component';
import { RouterModule } from "@angular/router";
import { BooksComponentComponent } from './books-component/books-component.component';
import { AuthorsComponentComponent } from './authors-component/authors-component.component';
import { AuthorProfileComponentComponent } from './author-profile-component/author-profile-component.component';
import { NotfoundComponentComponent } from './notfound-component/notfound-component.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuBarComponent,
    SideMenuBarComponent,
    BooksComponentComponent,
    AuthorsComponentComponent,
    AuthorProfileComponentComponent,
    NotfoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return{
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:5000/graphql'
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
