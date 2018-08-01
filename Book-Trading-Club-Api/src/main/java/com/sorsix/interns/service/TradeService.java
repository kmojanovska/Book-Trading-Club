package com.sorsix.interns.service;

import com.sorsix.interns.model.Trade;
import com.sorsix.interns.model.User;

import java.util.List;

/**
 * Created by Kristina on 10.05.2018.
 */
public interface TradeService {

    void deleteTrade(Long book1_id, Long book2_id, User usernamePropose, User usernameAccept);

    Trade createTrade(Long book1_id, Long book2_id, User usernamePropose, User usernameAccept);

    List<Trade> tradesPerProposingUser(User user);
}
