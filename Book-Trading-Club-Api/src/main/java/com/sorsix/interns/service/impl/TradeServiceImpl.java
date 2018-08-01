package com.sorsix.interns.service.impl;

import com.sorsix.interns.model.Trade;
import com.sorsix.interns.model.TradePK;
import com.sorsix.interns.model.User;
import com.sorsix.interns.repository.TradeRepository;
import com.sorsix.interns.service.TradeService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Kristina on 10.05.2018.
 */
@Service
public class TradeServiceImpl implements TradeService {

    private final TradeRepository tradeRepository;

    public TradeServiceImpl(TradeRepository tradeRepository) {
        this.tradeRepository = tradeRepository;
    }

    @Override
    public void deleteTrade(Long book1_id, Long book2_id, User usernamePropose, User usernameAccept) {
        TradePK tradePK = new TradePK(book1_id, book2_id);
        Trade trade = new Trade(tradePK, usernamePropose, usernameAccept);
        tradeRepository.delete(trade);
    }

    @Override
    public Trade createTrade(Long book1_id, Long book2_id, User usernamePropose, User usernameAccept) {
        TradePK tradePK = new TradePK(book1_id, book2_id);
        Trade trade = new Trade(tradePK, usernamePropose, usernameAccept);
        return tradeRepository.save(trade);
    }

    @Override
    public List<Trade> tradesPerProposingUser(User user) {
        return tradeRepository.findByProposingUser(user);
    }
}