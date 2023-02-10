package com.spring.backendapi.UserInfo;

import java.util.Map;

import com.spring.backendapi.Entity.EAuthProvider;
import com.spring.backendapi.ExceptionHandler.OAuth2AuthenticationProcessingException;



public class OAuth2UserInfoFactory {

	  public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
	    if (registrationId.equalsIgnoreCase(EAuthProvider.facebook.toString())) {
	      return new FacebookOAuth2UserInfo(attributes);

	    } else {
	      throw new OAuth2AuthenticationProcessingException(
	          "Sorry! Login with " + registrationId + " is not supported yet.");
	    }
	  }
	}

