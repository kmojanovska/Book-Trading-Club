package com.sorsix.interns.service.impl;

import com.sorsix.interns.model.Book;
import com.sorsix.interns.model.BookPicture;
import com.sorsix.interns.model.ImageEmbd;
import com.sorsix.interns.model.User;
import com.sorsix.interns.repository.BookPictureRepository;
import com.sorsix.interns.repository.BookRepository;
import com.sorsix.interns.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

/**
 * Created by Kristina on 02.05.2018.
 */
@Service
public class BookServiceImpl implements BookService {

    private static final Logger logger = LoggerFactory.getLogger(BookServiceImpl.class);

    private final BookRepository bookRepository;

    private final BookPictureRepository bookPictureRepository;

    public BookServiceImpl(BookRepository bookRepository, BookPictureRepository bookPictureRepository) {
        this.bookRepository = bookRepository;
        this.bookPictureRepository = bookPictureRepository;
    }


    public Book createBook(String name, LocalDate localDate, User user, String pictureUrl, String author, String userDescription) {
       return bookRepository.save(new Book(name, localDate, user, pictureUrl, author, userDescription));
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> getById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Optional<Book> getByBookTitle(String bookTitle) {
        return bookRepository.findByBookTitle(bookTitle);
    }

    public List<Book> getBooksPerUser(User user){
        return this.bookRepository.findByUser(user);
    }

    @Override
    @Transactional
    public Book createBook(Book book){
        logger.info("Creating User [{}]", book);
        return bookRepository.save(book);
    }

    @Override
    public void deleteBook(Book book) {
        logger.info("Deleting Book [{}]", book);
        bookRepository.delete(book);
    }

    @Override
    public void completeTrade(Book book1, Book book2) {
        logger.info("Trading books [{}], [{}] between [{}] [{}]", book1,book2,book1.getUser().getFullName(),book2.getUser().getFullName());
        User user1 = book1.getUser();
        User user2 = book2.getUser();
        updateOwner(book1,user2);
        updateOwner(book2,user1);

    }

    @Override
    public void updateOwner(Book book, User user) {
        book.setUser(user);
        bookRepository.save(book);
    }
    @Override
    public BookPicture createBookPicture(String contentType, byte data[], String fileName, int size) throws SQLException {
        ImageEmbd imageEmbd = new ImageEmbd(data, fileName, contentType, size);
        BookPicture bookPicture = new BookPicture(imageEmbd);
        return  bookPictureRepository.save(bookPicture);
    }


    @Transactional
    @Override
    public Book findBook(Long id) {
        return bookRepository.findById(id).get();
    }

    @Override
    public Book addBookPicture(Long bookId, MultipartFile image) throws IOException, SQLException {
        Book book = bookRepository.findById(bookId).get();
        ImageEmbd imageEmbd = new ImageEmbd(image.getBytes(), image.getName(), image.getContentType(), (int) image.getSize());
        BookPicture bookPicture = new BookPicture(imageEmbd);
        bookPictureRepository.save(bookPicture);
        book.bookPicture = bookPicture;
        book.bookPicture = bookPicture;
        return bookRepository.save(book);
    }
}
