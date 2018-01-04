package com.rev.tfe.boot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.tfe.boot.domain.Dish;
import com.rev.tfe.boot.repository.DishRepository;

@Service
@Transactional
public class DishServiceImpl implements DishService{

	@Autowired
	private DishRepository dRepo;
	
	@Override
	public Dish addDish(Dish dish) {
		dRepo.save(dish);
		return dish;
	}

	@Override
	public Dish findDishById(Integer id) {
		return dRepo.findOne(id);
	}

	@Override
	public List<Dish> findAllDish() {
		return dRepo.findAll();
	}

	@Override
	public List<Dish> findAllDishByMenuId(Integer menuId) {
		return dRepo.findAllByMenuId(menuId);
	}

}
