import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnChanges {

  books: IBook[];

  favoriteMessage: string = '';
  showImage: boolean = true;
  imageWidth: number = 100;
  animals: string[] =['zebra', 'moose'];
  errorMessage: string;

  constructor(private _bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  ngOnChanges() {
    console.log('new change detected');
  }

  getBooks() {
    this._bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = <any>error
      );
  }

  changeMethod(): void {
    this.animals = ['dog', 'cat'];
    console.log('change method happened', this.animals);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

}
