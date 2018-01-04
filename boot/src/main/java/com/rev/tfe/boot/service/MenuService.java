package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.Menu;

public interface MenuService {
	Menu findMenuByMenuId(Integer menuId);
	List<Menu> findAllMenu();
	Menu addMenu(Menu menu);
	Menu findMenuByAdminId(Integer adminId);
}
