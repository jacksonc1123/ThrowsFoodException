package com.rev.tfe.service;

import com.rev.tfe.domain.User;

public interface UserService {

	public User addUser(User u);
	public User findOneByEmail(String email);
	public User findOneById(Integer id);
	public User findOneByUserName(String username);
	
}
