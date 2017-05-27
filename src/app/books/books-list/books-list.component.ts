import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnChanges {

  books: IBook[];

  favoriteMessage: string = '';
  showImage: boolean = true;
  imageWidth: number = 100;
  animals: string[] =['zebra', 'moose'];  

  constructor(private _bookService: BookService) {
    this.books = _bookService.getBooks();
  }

  ngOnInit() {
    console.log('inside OnInit');
  }

  ngOnChanges() {
    console.log('new change detected');
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
