package com.rev.tfe.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.domain.DishReview;
import com.rev.tfe.boot.dto.DishRating;
import com.rev.tfe.boot.service.DishReviewService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/review")
public class DishReviewController {

	@Autowired
	ApplicationContext context;
	
	@Autowired
	DishReviewService drService;
	
	@RequestMapping(method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public void addReview(@RequestBody DishReview dr) {
		java.util.Date date = new java.util.Date();
		java.sql.Timestamp ts = new java.sql.Timestamp(date.getTime());
		dr.setSubmitted(ts.toString());
		System.out.println(dr);
		drService.addDishReview(dr);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<DishReview> getAllById(@PathVariable Integer id) {
		return drService.findAllByUserId(id);
	}
	
	@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<DishReview> getAll() {
		return drService.findAllDishReviews();
	}
	
	@RequestMapping(value="/all", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<DishRating> getAllAverages() {
		return drService.getDishAverages();
	}
	
}
