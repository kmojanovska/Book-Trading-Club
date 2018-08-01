import { Component, OnInit } from '@angular/core';
import {BookSample} from '../../models/book-sample.model';
import {BooksService} from '../../services/books.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { TradeRequestsService } from '../../services/trade-requests.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  bookSamples: Observable<BookSample[]>;
  bookSample1 = new BookSample();
  bookSample2 = new BookSample();
  bookSample3 = new BookSample();
  bookSample4 = new BookSample();
  private tradeRequestCreated: boolean;
  constructor(private booksService: BooksService,
    private authService: AuthService,
    private tradeRequestService: TradeRequestsService) {}

  ngOnInit() {
    this.getBooks();
    this.tradeRequestCreated = false;
    console.log('Is logged in all-books: ', this.authService.isLoggedIn);
  }

  getBooks() {
    this.bookSamples = this.booksService.loadAllBooks();
    /*this.bookSample1.bookTitle = 'Harry Potter';
    this.bookSample1.userDescription = 'Just write some stuff here so it is enough to show it is a paragraph.';
    this.bookSample1.author = 'J.K. Rowling';
    this.bookSample1.datePostedOn = '10.05.2018';
    this.bookSample1.ownerUsername = 'stefan';
    this.bookSample1.sampleID = 1;

    this.bookSample2.bookTitle = 'The Gambler';
    this.bookSample2.userDescription = 'Just write some stuff here so it is enough to show it is a paragraph, part2.';
    this.bookSample2.author = 'Fyodor Dostoyevsky';
    this.bookSample2.datePostedOn = '10.04.2018';
    this.bookSample2.ownerUsername = 'kristina';
    this.bookSample2.sampleID = 2;

    this.bookSample3.bookTitle = 'Notes from the underground';
    this.bookSample3.userDescription = 'Just write some stuff here so it is enough to show it is a paragraph, part2.';
    this.bookSample3.author = 'Fyodor Dostoyevsky';
    this.bookSample3.datePostedOn = '10.02.2018';
    this.bookSample3.ownerUsername = 'stefan';
    this.bookSample3.sampleID = 3;

    this.bookSample4.bookTitle = 'The Adolescent';
    this.bookSample4.userDescription = 'Just write some stuff here so it is enough to show it is a paragraph, part2.';
    this.bookSample4.author = 'Fyodor Dostoyevsky';
    this.bookSample4.datePostedOn = '10.03.2018';
    this.bookSample4.ownerUsername = 'kristina';
    this.bookSample4.sampleID = 4;

    this.bookSamples = [this.bookSample1, this.bookSample2, this.bookSample3, this.bookSample4];*/
  }

  createTradeRequest(book2_id: number) {
    this.tradeRequestService.addTradeRequest(book2_id);
    this.tradeRequestCreated = true;
  }
}
