package com.sorsix.interns.model;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

/**
 * Created by Kristina on 30.04.2018.
 */
@Embeddable
public class TradePK implements Serializable{
    protected Long book1_id;
    protected Long book2_id;

    public TradePK(){}

    public TradePK(Long book1_id, Long book2_id) {
        this.book1_id = book1_id;
        this.book2_id = book2_id;
    }

    public Long getBook1_id() {
        return book1_id;
    }

    public void setBook1_id(Long book1_id) {
        this.book1_id = book1_id;
    }

    public Long getBook2_id() {
        return book2_id;
    }

    public void setBook2_id(Long book2_id) {
        this.book2_id = book2_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TradePK)) return false;
        TradePK that = (TradePK) o;
        return Objects.equals(book1_id, that.book1_id) &&
                Objects.equals(book2_id, that.book2_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(book1_id, book2_id);
    }
}