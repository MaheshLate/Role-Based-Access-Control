package com.example.dto;

import com.example.entity.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest 
{
	
	@NotBlank
	String name;
	
	@Email
	private String email;
	
	@Size(min =4)
	private String password;
	
	
	private String role;

}
