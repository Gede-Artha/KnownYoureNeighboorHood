package com.spring.backendapi.Service;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.backendapi.Dto.EditProfileDto;
import com.spring.backendapi.Dto.UserDto;
import com.spring.backendapi.Entity.ERole;
import com.spring.backendapi.Entity.Roles;
import com.spring.backendapi.Entity.UserAccount;
import com.spring.backendapi.Repository.RolesRepository;
import com.spring.backendapi.Repository.UserAccountRepository;


@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserAccountRepository userRepo;

  @Autowired
  private RolesRepository rolesRepo;

  @Override
  public Roles createRole(ERole roleName) {
    Roles role = new Roles();
    role.setName(roleName);
    return rolesRepo.save(role);
  }

  @Override
  public UserAccount findByEmail(String email) {
    return userRepo.findByEmail(email).get();
  }

  @Override
  public UserAccount getById(int userId) {
    UserAccount user = userRepo.findById(userId).get();

    return user;
  }

  @Override
  public UserAccount editProfile(EditProfileDto editProfileDto) {
    UserAccount user = getById(editProfileDto.getUserId());

    user.setName(editProfileDto.getName());
    user.setAddress(editProfileDto.getAddress());
    user.setPhoneNumber(editProfileDto.getPhoneNumber());

    return userRepo.save(user);
  }

  @Override
  public List<UserDto> listUser() {
    ModelMapper modelMapper = new ModelMapper();

    List<UserAccount> users = userRepo.findAll();
    List<UserDto> listUser = Arrays.asList(modelMapper.map(users, UserDto[].class));
    return listUser;
  }

}

