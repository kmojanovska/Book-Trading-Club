package com.sorsix.interns.api;

import com.sorsix.interns.model.Book;
import com.sorsix.interns.model.Trade;
import com.sorsix.interns.model.User;
import com.sorsix.interns.service.impl.BookServiceImpl;
import com.sorsix.interns.service.impl.TradeServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kristina on 18.05.2018.
 */

@RestController
@RequestMapping("/api")
public class TradeController {

    private static final Logger logger = LoggerFactory.getLogger(TradeController.class);

    private final TradeServiceImpl tradeService;
    private final BookServiceImpl bookService;

    public TradeController(TradeServiceImpl tradeService, BookServiceImpl bookService) {
        this.tradeService = tradeService;
        this.bookService = bookService;
    }

    @PostMapping("/trades")
    public List<Trade> retrieveTradesPerUser(@RequestBody User proposingUser){
        logger.info("here");
        return tradeService.tradesPerProposingUser(proposingUser);
    }

    @PostMapping(value = "/accept-trade")
    public void completeTrade(@RequestParam Long book1_id, @RequestParam Long book2_id, @RequestParam User usernamamePropose, @RequestParam User usernameAccept){
        Book book1 = bookService.getById(book1_id).orElse(null);
        Book book2 = bookService.getById(book2_id).orElse(null);
        bookService.completeTrade(book1,book2);
        tradeService.deleteTrade(book1.getSampleID(),book2.getSampleID(),usernamamePropose,usernameAccept);
    }

    @PostMapping(value = "/create-trade")
    public void createTrade(@RequestParam Long id1, @RequestParam Long id2, @RequestParam User usernamamePropose, @RequestParam User usernameAccept){
        tradeService.createTrade(id1, id2, usernamamePropose, usernameAccept);
    }

    @PostMapping(value = "/decline-trade")
    public void declineTrade(@RequestParam Long book1_id, @RequestParam Long book2_id, @RequestParam User usernamamePropose, @RequestParam User usernameAccept){
        Book book1 = bookService.getById(book1_id).orElse(null);
        Book book2 = bookService.getById(book2_id).orElse(null);
        tradeService.deleteTrade(book1.getSampleID(),book2.getSampleID(),usernamamePropose,usernameAccept);
    }
}