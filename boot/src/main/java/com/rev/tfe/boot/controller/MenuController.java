package com.rev.tfe.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.domain.Menu;
import com.rev.tfe.boot.service.MenuService;

@RestController
@RequestMapping("/menu")
@CrossOrigin(origins="http://localhost:4200")
public class MenuController {
	
	@Autowired
	private MenuService menuService;
	
	@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Menu> findAllMenu() {
		return menuService.findAllMenu();
	}
	
	@RequestMapping(value="/{menuId}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public Menu findMenuByMenuId(@PathVariable Integer menuId) {
		return menuService.findMenuByMenuId(menuId);
	}
	
	@RequestMapping(value="admin/{adminId}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public Menu findMenuByUserId(@PathVariable Integer adminId) {
		return menuService.findMenuByAdminId(adminId);
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public Menu addMenu(@RequestBody Menu menu) {
		return menuService.addMenu(menu);
	}
}
