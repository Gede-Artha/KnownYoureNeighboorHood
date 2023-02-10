package com.spring.backendapi.Service;

import java.util.List;

import com.spring.backendapi.Dto.EditProfileDto;
import com.spring.backendapi.Dto.UserDto;
import com.spring.backendapi.Entity.ERole;
import com.spring.backendapi.Entity.Roles;
import com.spring.backendapi.Entity.UserAccount;


public interface UserService {

	  Roles createRole(ERole roleName);

	  UserAccount findByEmail(String email);

	  List<UserDto> listUser();

	  UserAccount getById(int userId);

	  UserAccount editProfile(EditProfileDto editProfileDto);

	}
