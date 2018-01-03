package com.rev.tfe.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rev.tfe.boot.domain.OverallReview;
import com.rev.tfe.boot.repository.OverallReviewRepository;

@Component
@Service
@Transactional
public class OverallReviewServiceImpl implements OverallReviewService {
	
	@Autowired
	private OverallReviewRepository orRepo;

	@Override
	public void addOverallReview(OverallReview or) {
		// TODO Auto-generated method stub
		orRepo.save(or);
	}

	@Override
	public List<OverallReview> findAllOverallReviews() {
		return orRepo.findAll();
	}

	@Override
	public OverallReview findOverallReview(Integer orId) {
		if (orId == null) return null;
		return orRepo.getOne(orId);
	}

	@Override
	public OverallReview findOverallReviewByTicketId(Integer tickId) {
		return orRepo.findOverallReviewByTicketTicketId(tickId);
	}
//
//	public OverallReview findOverallReviewByUserId(Integer userId) {
//		return orRepo.findOverallReviewByUserId(userId);
//	}
//	
//	public OverallReview findOverallReviewByUser(User u) {
//		return orRepo.findOverallReviewByUser(u);
//	}

}
