import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: any[] = [
    {
      bookAuthor: 'Tom Jones',
      bookTitle: 'War and Peace 2',
      bookPrice: '$29.95',
      bookDescription: 'Book of historical fiction',
      bookReviews: 15,
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 2
    },{
      bookAuthor: 'Tom Jones',
      bookTitle: 'War and Peace 2',
      bookPrice: '$29.95',
      bookDescription: 'Book of historical fiction',
      bookReviews: 15,
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 2
    },{
      bookAuthor: 'Tom Jones',
      bookTitle: 'War and Peace 2',
      bookPrice: '$29.95',
      bookDescription: 'Book of historical fiction',
      bookReviews: 15,
      bookImageUrl: 'assets/images/656.jpg',
      bookInStock: 2
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
