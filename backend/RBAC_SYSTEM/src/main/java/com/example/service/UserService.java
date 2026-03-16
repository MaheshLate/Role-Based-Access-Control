package com.example.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService
{
		private final UserRepository userRepository;
		
		public List<User> getAllUsers(){
			
			return userRepository.findAll();
		}
}
