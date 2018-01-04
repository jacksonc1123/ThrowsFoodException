package com.rev.tfe.boot.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="DISH")
public class Dish {
	
	@Id
	@Column(name="DISH_ID")
	@SequenceGenerator(name="D_SEQ", sequenceName="D_SEQ")
	@GeneratedValue(generator="D_SEQ", strategy=GenerationType.SEQUENCE)
	private Integer id;
	
	@Column(name="DISH_NAME", nullable=false)
	private String name;

	@Column(name="DISH_PRICE", nullable=false)
	private Double price;

	@Column(name="DISH_DESCRIPTION", nullable=true)
	private String description;
	
	@Autowired
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="TYPE_ID", nullable=false)
	private Type type;
	
	@Autowired
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="MENU_ID", nullable=false)
	private Menu menu;

	public Dish() {
		super();
	}
	
	public Dish(String name, Double price, String description) {
		super();
		this.name = name;
		this.price = price;
		this.description = description;
	}

	public Dish(Integer id, String name, Double price, String description) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
	}

	public Dish(Integer id, String name, Double price, String description, Type type, Menu menu) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.type = type;
		this.menu = menu;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	@Override
	public String toString() {
		return "Dish [id=" + id + ", name=" + name + ", price=" + price + ", description=" + description + ", type="
				+ type + ", menu=" + menu + "]";
	}
	
}
