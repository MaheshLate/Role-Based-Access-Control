package com.example.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController 
{
	@GetMapping("/public")
	public String publicEndpoint() {
		
		return "Public endpoint";
	}
	
	@PreAuthorize("hasRole('User')or hasRole('Admin')")
	@GetMapping("/user")
	public String userEndpoint()
	{
		return "User endpoint";
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/admin")
	public String adminEndpoint()
	{
		return "Admin endpoint";
	}

}
