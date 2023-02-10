package com.spring.backendapi.Service;

import java.util.List;

import com.spring.backendapi.Dto.StoreDto;
import com.spring.backendapi.Entity.Store;


public interface StoreService {
	List<Store> listStore();

	  Store getStoreById(int storeId);

	  StoreDto addStore(StoreDto storeDto);

	  Store editStore(StoreDto storeDto);

	  List<Store> searchStore(String keyword);

}
