package com.spring.backendapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.backendapi.Entity.ERole;
import com.spring.backendapi.Entity.Roles;



public interface RolesRepository extends JpaRepository<Roles, Long> {

	  Roles findByName(ERole roleName);
	}