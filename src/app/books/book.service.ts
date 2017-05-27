import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IBook } from './book';

@Injectable()
export class BookService {

    getBooks(): IBook[] {
        return [
            {
                bookAuthor: 'Tom Jones',
                bookTitle: 'War and Peace 2',
                bookPrice: 29.95,
                bookDescription: 'Book of historical fiction',
                bookReviews: 15,
                publishedOn: new Date('02/11/1921'),
                bookImageUrl: 'assets/images/656.jpg',
                inStock: 'yes'
            },{
                bookAuthor: 'Tom Jones',
                bookTitle: 'War and Peace 3',
                bookPrice: 29.95,
                bookDescription: 'Book of historical fiction',
                bookReviews: 18,
                publishedOn: new Date('02/11/1921'),
                bookImageUrl: 'assets/images/656.jpg',
                inStock: 'yes'
            },{
                bookAuthor: 'Tom Jones',
                bookTitle: 'War and Peace 4',
                bookPrice: 29.95,
                bookDescription: 'Book of historical fiction',
                bookReviews: 27,
                publishedOn: new Date('02/11/1921'),
                bookImageUrl: 'assets/images/656.jpg',
                inStock: 'yes'
            }
        ];
    }
}