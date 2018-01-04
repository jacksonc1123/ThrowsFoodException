package com.rev.tfe.boot.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "MENU")
public class Menu {

	@Id
	@SequenceGenerator(allocationSize = 1, name = "M_SEQ", sequenceName = "M_SEQ")
	@GeneratedValue(generator = "M_SEQ", strategy = GenerationType.SEQUENCE)
	@Column(name = "MENU_ID")
	private Integer id;
	
	@Column(name = "ADDRESS", nullable = false, unique = true)
	private String address;
	
	@Column(name = "PHONE", nullable = false, unique = true)
	private String phone;
	
	@Column(name = "OPERATION", nullable = false, unique = true)
	private String operation;
	
	@Column(name = "ABOUT", nullable = false, unique = true)
	private String about;
	
	@Column(name = "NAME", nullable = false, unique = true)
	private String name;

	@Autowired
	@OneToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="USER_ID", nullable = false, unique = true)
	private User admin;

	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Menu(String address, String phone, String operation, String about, String name, User admin) {
		super();
		this.address = address;
		this.phone = phone;
		this.operation = operation;
		this.about = about;
		this.name = name;
		this.admin = admin;
	}

	public Menu(Integer id, String address, String phone, String operation, String about, String name, User admin) {
		super();
		this.id = id;
		this.address = address;
		this.phone = phone;
		this.operation = operation;
		this.about = about;
		this.name = name;
		this.admin = admin;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public User getAdmin() {
		return admin;
	}

	public void setAdmin(User admin) {
		this.admin = admin;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Menu [id=" + id + ", address=" + address + ", phone=" + phone + ", operation=" + operation + ", about="
				+ about + ", name=" + name + ", admin=" + admin + "]";
	}

}
