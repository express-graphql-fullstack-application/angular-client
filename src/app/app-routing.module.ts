import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponentComponent } from './books-component/books-component.component';
import { AuthorsComponentComponent } from './authors-component/authors-component.component';
import { AuthorProfileComponentComponent } from './author-profile-component/author-profile-component.component';
import { NotfoundComponentComponent } from './notfound-component/notfound-component.component';
const routes: Routes = [
  {path: 'books', component: BooksComponentComponent},
  {path: 'authors', component: AuthorsComponentComponent},
  {path: 'author/:authorname', component: AuthorProfileComponentComponent},
  {path: '**', component: NotfoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
