package com.sorsix.interns.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Kristina on 30.04.2018.
 */
@Entity
@Table(name="trades")
public class Trade implements Serializable {
    @EmbeddedId
    private TradePK tradePK;
    @ManyToOne
    private User proposingUser;
    @ManyToOne
    private User acceptingUser;

    public Trade(){}

    public Trade(TradePK tradePK, User proposingUser, User acceptingUser) {
        this.tradePK = tradePK;
        this.proposingUser = proposingUser;
        this.acceptingUser = acceptingUser;
    }

    public TradePK getTradePK() {
        return tradePK;
    }

    public void setTradePK(TradePK tradePK) {
        this.tradePK = tradePK;
    }

    public User getProposingUser() {
        return proposingUser;
    }

    public void setProposingUser(User proposingUser) {
        this.proposingUser = proposingUser;
    }

    public User getAcceptingUser() {
        return acceptingUser;
    }

    public void setAcceptingUser(User acceptingUser) {
        this.acceptingUser = acceptingUser;
    }
}