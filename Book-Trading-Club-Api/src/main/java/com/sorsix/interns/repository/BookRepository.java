package com.sorsix.interns.repository;

import com.sorsix.interns.model.Book;
import com.sorsix.interns.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Created by Kristina on 30.04.2018.
 */
@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

    List<Book> findByUser(User user);
    Optional<Book> findByBookTitle(String bookTitle);
}
