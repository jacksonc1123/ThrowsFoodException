package com.rev.tfe.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.tfe.boot.domain.DishReview;

@Repository
public interface DishReviewRepository extends JpaRepository<DishReview, Integer> {
	public DishReview findDishReviewByUserId(Integer userId);
	public List<DishReview> findAllByUserId(Integer userId);
	public List<DishReview> findAllByDishId(Integer dishId);
}
