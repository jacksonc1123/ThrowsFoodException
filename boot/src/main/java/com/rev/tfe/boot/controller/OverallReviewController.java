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

import com.rev.tfe.boot.domain.OverallReview;
import com.rev.tfe.boot.service.OverallReviewService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/overall")
public class OverallReviewController {

	@Autowired
	ApplicationContext context;
	
	@Autowired
	OverallReviewService orService;
	
	@RequestMapping(method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public void addReview(@RequestBody OverallReview or) {
		orService.addOverallReview(or);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET, consumes=MediaType.APPLICATION_JSON_VALUE)
	public OverallReview getOverallByTicketId(@PathVariable Integer id) {
		return orService.findOverallReviewByTicketId(id);
	}
	
	@RequestMapping(method=RequestMethod.GET, consumes=MediaType.APPLICATION_JSON_VALUE)
	public List<OverallReview> getAllByTicketId(@PathVariable Integer id) {
		return orService.findAllOverallReviews();
	}
}
