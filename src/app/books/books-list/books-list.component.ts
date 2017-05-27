import { Component, OnInit } from '@angular/core';

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
export class BooksListComponent implements OnInit {

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
      bookTitle: 'War and Peace 2',
      bookPrice: 29.95,
      bookDescription: 'Book of historical fiction',
      bookReviews: 15,
      publishedOn: new Date('02/11/1921'),
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 'yes'
    },{
      bookAuthor: 'Tom Jones',
      bookTitle: 'War and Peace 2',
      bookPrice: 29.95,
      bookDescription: 'Book of historical fiction',
      bookReviews: 15,
      publishedOn: new Date('02/11/1921'),
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 'yes'
    }
  ];

  showImage: boolean = true;
  imageWidth: number = 100;
  

  constructor() { }

  ngOnInit() {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
