import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { HighlightDirective } from './shared/hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
