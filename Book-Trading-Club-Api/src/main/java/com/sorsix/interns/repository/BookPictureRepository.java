package com.sorsix.interns.repository;

import com.sorsix.interns.model.BookPicture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookPictureRepository extends JpaRepository<BookPicture, Long> {
}
