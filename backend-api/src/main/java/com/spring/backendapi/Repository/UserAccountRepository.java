package com.spring.backendapi.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.backendapi.Entity.UserAccount;



public interface UserAccountRepository extends JpaRepository<UserAccount, Integer> {

	  public Optional<UserAccount> findByEmail(String email);

	  Boolean existsByEmail(String email);
	}
