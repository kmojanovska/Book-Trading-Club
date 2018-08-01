package com.sorsix.interns.model;

import javax.persistence.*;
import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

/**
 * Created by Kristina on 30.04.2018.
 */
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long sampleID;

    @NotNull
    private String bookTitle;

    private LocalDate datePostedOn;

    @ManyToOne
    private User user;

    private String pictureUrl;

    private String userDescription;

    private String author;

    @OneToOne(cascade = CascadeType.REMOVE)
    public BookPicture bookPicture;

    public Book(){}

    public Book(@NotNull String bookTitle, LocalDate datePostedOn, User user, String pictureUrl, String author, String userDescription) {
        this.bookTitle = bookTitle;
        this.datePostedOn = datePostedOn;
        this.user = user;
        this.pictureUrl = pictureUrl;
        this.userDescription = userDescription;
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + sampleID +
                ", name='" + bookTitle + '\'' +
                ", datePostedOn=" + datePostedOn +
                ", user=" + user +
                ", pictureUrl='" + pictureUrl + '\'' +
                '}';
    }

    public long getSampleID() {
        return sampleID;
    }

    public void setSampleID(long sampleID) {
        this.sampleID = sampleID;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public LocalDate getDatePostedOn() {
        return datePostedOn;
    }

    public void setDatePostedOn(LocalDate datePostedOn) {
        this.datePostedOn = datePostedOn;
    }

    public User getUser() {
        return user;
    }

    @Transactional
    public void setUser(User user) {
        this.user = user;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public String getUserDescription() {
        return userDescription;
    }

    public void setUserDescription(String userDescription) {
        this.userDescription = userDescription;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
