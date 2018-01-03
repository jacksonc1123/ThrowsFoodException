package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.DishReview;
import com.rev.tfe.boot.dto.DishRating;

public interface DishReviewService {
	public void addDishReview(DishReview dr);
	public DishReview findDishReviewById(Integer dishId);
	public List<DishReview> findAllByUserId(Integer userId);
	public List<DishReview> findAllDishReviews();
	public List<DishRating> getDishAverages();
}
