package com.rev.tfe.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rev.tfe.boot.domain.Menu;
import com.rev.tfe.boot.repository.MenuRepository;

@Service
@Transactional
public class MenuServiceImpl implements MenuService {

	@Autowired
	private MenuRepository menuRepo;
	
	@Override
	public Menu findMenuByMenuId(Integer menuId) {
		return menuRepo.findOne(menuId);
	}

	@Override
	public List<Menu> findAllMenu() {
		return menuRepo.findAll();
	}

	@Override
	public Menu addMenu(Menu menu) {
		return menuRepo.save(menu);
	}

	@Override
	public Menu findMenuByAdminId(Integer adminId) {
		return menuRepo.findAllByAdminId(adminId);
	}
}
