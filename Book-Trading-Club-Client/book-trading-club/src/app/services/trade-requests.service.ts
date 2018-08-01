import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TradeRequestsService {
  private apiAddTradeRequest = '/api/create-trade';
  private apiAcceptTradeRequest = '/api/accept-trade';
  private apiDeclineTradeRequest = '/api/decline-trade';
  // Used for initializing a trade request.
  private book1_id: number;
  private tradeRequestInitialized: boolean;

  constructor(private http: HttpClient) { }

  initTradeRequest(book1_id: number) {
    this.book1_id = book1_id;
    this.tradeRequestInitialized = true;
    console.log('initialized trade request? ', this.tradeRequestInitialized);
    console.log('with book1_id: ', this.book1_id);
  }

  addTradeRequest(book2_id: number) {
    if (this.tradeRequestInitialized) {
      this.http.post(this.apiAddTradeRequest, {
        book1_id: this.book1_id, book2_id: book2_id
      });
      this.tradeRequestInitialized = false;
      console.log('added new trade request with: book1_id {} and book2_id {}', this.book1_id, book2_id);
      console.log('initialized trade request? ', this.tradeRequestInitialized);
    }
  }

  acceptTradeRequest(book1_id: number, book2_id: number) {
    if (this.tradeRequestInitialized) {
      this.http.post(this.apiAcceptTradeRequest, {
        book1_id: this.book1_id, book2_id: book2_id
      });
      this.tradeRequestInitialized = false;
    }
  }

  declineTradeRequest(book1_id: number, book2_id: number) {
    if (this.tradeRequestInitialized) {
      this.http.post(this.apiDeclineTradeRequest, {
        book1_id: this.book1_id, book2_id: book2_id
      });
      this.tradeRequestInitialized = false;
    }
  }

  loadUnapprovedTradeRequests() {
    /*
      Here should make a http get request to the server for the requests regarding the logged in user.
      It `gets` the requests made towards the user, and not the ones he made towards the others.
     */
    return null;
  }

  loadOutstandingTradeRequests() {
    /*
      Here should make a http get request to the server for the requests regarding the logged in user.
      It `gets` the requests the user made towards others, and not the ones made towards him.
     */
    return null;
  }

}
