import { Component, OnInit, OnChanges } from '@angular/core';
// import { IBook } from '../book';

interface IBook {
  bookAuthor: string;
  bookTitle: string;
  bookPrice: number;
  bookDescription: string;
  bookReviews: number;
  publishedOn: Date;
  bookImageUrl: string;
  bookInStock: string;
  hardcover?: boolean;
}

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnChanges {

  books: IBook[] = [
    {
      bookAuthor: 'Tom Jones',
      bookTitle: 'War and Peace 2',
      bookPrice: 29.95,
      bookDescription: 'Book of historical fiction',
      bookReviews: 15,
      publishedOn: new Date('02/11/1921'),
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 'yes',
      hardcover: false
    },{
      bookAuthor: 'Tom Jones',
      bookTitle: 'War and Peace 3',
      bookPrice: 29.95,
      bookDescription: 'Book of historical fiction',
      bookReviews: 18,
      publishedOn: new Date('02/11/1921'),
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 'yes'
    },{
      bookAuthor: 'Tom Jones',
      bookTitle: 'War and Peace 4',
      bookPrice: 29.95,
      bookDescription: 'Book of historical fiction',
      bookReviews: 27,
      publishedOn: new Date('02/11/1921'),
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 'yes'
    }
  ];

  favoriteMessage: string = '';
  showImage: boolean = true;
  imageWidth: number = 100;
  animals: string[] =['zebra', 'moose'];  

  constructor() { }

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
