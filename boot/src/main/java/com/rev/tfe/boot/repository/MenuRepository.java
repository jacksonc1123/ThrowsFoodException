package com.rev.tfe.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.tfe.boot.domain.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {
	Menu findAllById(Integer userId);
}
