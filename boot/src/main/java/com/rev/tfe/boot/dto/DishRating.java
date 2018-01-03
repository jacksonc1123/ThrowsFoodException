package com.rev.tfe.boot.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.rev.tfe.boot.domain.Dish;

@Component
public class DishRating {

	@Autowired
	private Dish dish;
	private double score;
	
	public DishRating () {}

	public DishRating(Dish dish, double rating) {
		super();
		this.dish = dish;
		this.score = rating;
	}

	public Dish getDish() {
		return dish;
	}

	public void setDish(Dish dish) {
		this.dish = dish;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "DishRating [dish=" + dish + ", rating=" + score + "]";
	}
	
	
}
