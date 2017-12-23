package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.User;

public interface UserService {
	
	public User addUser(User u);
	public List<User> findAllUsers();
	public User findUserById(Integer id);
	public User findUserByEmail(String email);
	public User findUserByUserName(String username);

}
