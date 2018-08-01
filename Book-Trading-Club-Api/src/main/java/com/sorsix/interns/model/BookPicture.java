package com.sorsix.interns.model;

import javax.persistence.*;

/**
 * Created by Kristina on 18.05.2018.
 */

@Entity
@Table(name = "book_pictures")
public class BookPicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    public ImageEmbd picture;

    public BookPicture() {
    }

    public BookPicture(ImageEmbd picture) {
        this.picture = picture;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BookPicture that = (BookPicture) o;

        return id.equals(that.id);

    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}