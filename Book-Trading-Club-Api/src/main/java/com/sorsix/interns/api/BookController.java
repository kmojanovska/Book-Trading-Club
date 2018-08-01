package com.sorsix.interns.api;

import com.sorsix.interns.model.Book;
import com.sorsix.interns.model.User;
import com.sorsix.interns.service.impl.BookServiceImpl;
import com.sorsix.interns.service.impl.TradeServiceImpl;
import com.sorsix.interns.service.impl.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

/**
 * Created by Kristina on 02.05.2018.
 */
@RestController
@RequestMapping("/api")
public class BookController {

    private static final Logger logger = LoggerFactory.getLogger(BookController.class);

    private final BookServiceImpl bookService;
    private final UserServiceImpl userService;
    private final TradeServiceImpl tradeService;

    public BookController(BookServiceImpl bookService, UserServiceImpl userService, TradeServiceImpl tradeService) {
        this.bookService = bookService;
        this.userService = userService;
        this.tradeService = tradeService;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/all-books")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/my-books")
    public List<Book> getBooksPerUser(@RequestParam String username) {
        logger.info("Username " + username);
        Optional<User> user = userService.getUser(username);
        return bookService.getBooksPerUser(user.get());
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/create-book")
    public Book createABookPost(@RequestParam String bookTitle, @RequestParam String username, @RequestParam String pictureUrl, @RequestParam String author, @RequestParam String userDescription) {
        logger.info("here");
        Optional<User> user = userService.getUser(username);
        Book book = new Book(bookTitle, LocalDate.now(), user.get(), pictureUrl, author, userDescription);
        return bookService.createBook(book);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/delete-book")
    public void deleteABook(@RequestParam String bookTitle) {
        Book book = bookService.getByBookTitle(bookTitle).orElse(null);
        bookService.deleteBook(book);
    }
}
