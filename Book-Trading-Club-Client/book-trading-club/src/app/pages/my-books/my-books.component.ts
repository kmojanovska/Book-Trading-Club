import { Component, OnInit } from '@angular/core';
import {BookSample} from '../../models/book-sample.model';
import {TradeRequest} from '../../models/tradeRequest.model';
import {UsersService} from '../../services/users.service';
import { BooksService } from '../../services/books.service';
import { TradeRequestsService } from '../../services/trade-requests.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  userBooks: Observable<BookSample[]>;
  bookSample1 = new BookSample();
  bookSample2 = new BookSample();
  bookSample3 = new BookSample();
  bookSample4 = new BookSample();
  tr1 = new TradeRequest();
  tr2 = new TradeRequest();
  outstandingTradeRequests: TradeRequest[];
  unapprovedTradeRequests: TradeRequest[];
  showOutstandingTradeRequests: boolean;
  showUnapprovedTradeRequests: boolean;

  constructor(private userService: UsersService,
    private bookService: BooksService,
    private tradeRequestService: TradeRequestsService) { }

  ngOnInit() {
    this.loadUserBooks();
    this.showOutstandingTradeRequests = false;
    this.showUnapprovedTradeRequests = false;
  }

  onClickOutstanding() {
    // this.loadUsersOutstandingTradeRequests();
    this.showOutstandingTradeRequests = true;
    this.showUnapprovedTradeRequests = false;
  }

  onClickUnapproved() {
    // this.loadUsersUnapprovedTradeRequests();
    this.showOutstandingTradeRequests = false;
    this.showUnapprovedTradeRequests = true;
  }

  loadUserBooks() {
    this.userBooks = this.bookService.loadUserBooks();
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

    this.userBooks = [this.bookSample1, this.bookSample2, this.bookSample3, this.bookSample4];
    this.tr1.bookSampleProposed = this.bookSample1.sampleID;
    this.tr1.bookSampleRequested = this.bookSample2.sampleID;
    this.tr2.bookSampleProposed = this.bookSample3.sampleID;
    this.tr2.bookSampleRequested = this.bookSample4.sampleID;
    this.unapprovedTradeRequests = [this.tr1, this.tr2];
    this.outstandingTradeRequests = [this.tr1];*/
  }
  /*
    This method should be executed when the user searches for a new book to add.
   */
  searchNewBooks() {
    /*
      Method not implemented.
    */
  }

  loadUsersOutstandingTradeRequests() {
    this.outstandingTradeRequests = this.tradeRequestService.loadOutstandingTradeRequests();
  }

  loadUsersUnapprovedTradeRequests() {
    this.unapprovedTradeRequests = this.tradeRequestService.loadUnapprovedTradeRequests();
  }

  acceptTradeRequest(request: TradeRequest) {
    this.tradeRequestService.acceptTradeRequest(request.bookSampleProposed, request.bookSampleRequested);
  }

  denyTradeRequest(request: TradeRequest) {
    this.tradeRequestService.declineTradeRequest(request.bookSampleProposed, request.bookSampleRequested);
  }

  initTradeRequest(book1_id: number) {
    this.tradeRequestService.initTradeRequest(book1_id);
  }
}
