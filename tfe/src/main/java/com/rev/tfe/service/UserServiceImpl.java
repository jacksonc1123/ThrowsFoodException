package com.rev.tfe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rev.tfe.dao.UserRepository;
import com.rev.tfe.domain.User;


@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository uRepo;
	
	public User addUser(User u) {
		return uRepo.save(u);
	}

	@Override
	public User findOneByEmail(String email) {
		return uRepo.findOneByEmail(email);
	}

	@Override
	public User findOneById(Integer id) {
		return uRepo.findOneById(id);
	}

	@Override
	public User findOneByUserName(String username) {
		return uRepo.findOneByUserName(username);
	}
	
	
	
	
}
