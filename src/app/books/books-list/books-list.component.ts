import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  showImage: boolean = true;

  imageWidth: number = 100;
  bookAuthor: string = 'Tom Jones';
  bookTitle: string = 'War and Peace 2';
  bookPrice: string = '$29.95';
  bookDescription: string = 'Book of historical fiction';
  bookReviews: number = 15;
  bookImageUrl: string = 'assets/images/656.jpg';

  constructor() { }

  ngOnInit() {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
