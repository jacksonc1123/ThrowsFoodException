package com.rev.tfe.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.rev.tfe.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	public User findOneByEmail(String email);
	public User findOneByUserName(String username);
	public User findOneById (Integer id);



	
	
}
