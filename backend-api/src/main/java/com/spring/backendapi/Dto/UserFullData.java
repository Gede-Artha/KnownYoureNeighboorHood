package com.spring.backendapi.Dto;

import java.util.List;

import com.spring.backendapi.Entity.Store;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserFullData {

  private UserDto profile;

  private List<Store> stores;

  private List<String> roles;

}
