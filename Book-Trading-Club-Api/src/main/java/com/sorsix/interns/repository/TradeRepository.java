package com.sorsix.interns.repository;

import com.sorsix.interns.model.Trade;
import com.sorsix.interns.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Kristina on 30.04.2018.
 */
public interface TradeRepository extends JpaRepository<Trade, Long> {
    List<Trade> findByProposingUser(User proposingUser);
}
