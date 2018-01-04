package com.rev.tfe.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rev.tfe.boot.domain.Dish;

public interface DishRepository extends JpaRepository<Dish, Integer>{
	Dish findDishById(Integer userId);
	List<Dish> findAllByMenuId(Integer menuId);
}
