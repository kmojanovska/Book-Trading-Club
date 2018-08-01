package com.sorsix.interns.service;

import com.sorsix.interns.model.Book;
import com.sorsix.interns.model.BookPicture;
import com.sorsix.interns.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

/**
 * Created by Kristina on 02.05.2018.
 */
public interface BookService {

    List<Book> getAllBooks();

    Optional<Book> getById(Long id);

    Optional<Book> getByBookTitle(String bookTitle);

    List<Book> getBooksPerUser(User user);

    Book createBook(Book book);

    void deleteBook(Book book);

    // Updating the User property fo the books after successful trade.
    void completeTrade(Book book1, Book book2);

    void updateOwner(Book book, User user);

    BookPicture createBookPicture(String contentType, byte data[], String fileName, int size) throws SQLException;

    Book addBookPicture (Long bookId, MultipartFile image) throws IOException, SQLException;

    public Book findBook(Long id);
}
