import { Injectable } from '@angular/core';
import {BookSample} from '../models/book-sample.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class BooksService {
  private apiAllBooksUrl = '/api/all-books';
  private apiMyBooksUrl = '/api/my-books';
  private apiAddBookUrl = '/api/create-book';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private authService: AuthService) { }

  loadAllBooks(): Observable<BookSample[]> {
    console.log('books service, load all books');
    return this.http.get<BookSample[]>(this.apiAllBooksUrl);
  }

  loadUserBooks(): Observable<BookSample[]> {
    const formData = new FormData();
    formData.append('username', this.authService.loggedUser.username);
    console.log('books service, load user books with username ', this.authService.loggedUser.username);
    return this.http.post<BookSample[]>(this.apiMyBooksUrl, formData);
  }

  /*
    This feature is yet to be implemented.
  */

  addNewBook(bookTitle: string, pictureUrl: string, author: string, userDescription: string) {
    this.http.post(this.apiAddBookUrl, {
      bookTitle: bookTitle, username: this.authService.loggedUser.username, pictureUrl: pictureUrl,
      author: author, userDescription: userDescription
    });
  }
}
