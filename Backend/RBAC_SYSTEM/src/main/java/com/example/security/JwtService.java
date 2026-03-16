package com.example.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
@Service
public class JwtService 
{
	
	private static final String SECRET = "secret123";
	
	private String generateToken(UserDetails userDetails)
	{
		  return Jwts.builder()
	                .setSubject(userDetails.getUsername())
	                .signWith(io.jsonwebtoken.SignatureAlgorithm
	                		.HS256, SECRET)
	                .compact();
	    } 
	

}
