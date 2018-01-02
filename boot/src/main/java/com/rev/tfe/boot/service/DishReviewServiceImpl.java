package com.rev.tfe.boot.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.tfe.boot.domain.Dish;
import com.rev.tfe.boot.domain.DishReview;
import com.rev.tfe.boot.repository.DishReviewRepository;
import com.rev.tfe.boot.dto.*;

@Service
@Transactional
public class DishReviewServiceImpl implements DishReviewService {

	@Autowired
	private DishReviewRepository drRepo;
	
	public void addDishReview(DishReview dr) {
		drRepo.save(dr);
	}

	public DishReview findDishReviewById(Integer dishId) {
		if (dishId == null) return null;
		return drRepo.getOne(dishId);
	}
	
	public List<DishReview> findAllDishReviews() {
		return drRepo.findAll();
	}

	@Override
	public List<DishReview> findAllByUserId(Integer userId) {
		return drRepo.findAllByUserId(userId);
	}

	public List<DishRating> getDishAverages(){
		List<DishRating> scores = new ArrayList<DishRating>();
		List<DishReview> reviews = drRepo.findAll();
		class ReviewInfo{
			double total;
			int count;
			ReviewInfo(){
				total = 0;
				count = 0;
			}
		}
		
		Map<Integer, ReviewInfo> sums = new HashMap<Integer, ReviewInfo>();
		Integer key;
		for (DishReview dr : reviews) {
			key = dr.getDish().getId();
			ReviewInfo info = new ReviewInfo();
			
			if (sums.containsKey(key)) {
				info = sums.get(key);
			}
			
			info.total += dr.getRating();
			info.count++;
			sums.put(key, info);
		}
		
		for (Map.Entry<Integer, ReviewInfo> entry : sums.entrySet()) {
			DishRating dr = new DishRating();
			Dish tmp = new Dish();
			tmp.setId(entry.getKey());
			dr.setDish(tmp);
			dr.setScore(entry.getValue().total/entry.getValue().count);
			scores.add(dr);
		}
		return scores;
		

		
	}
	
}
