package com.SDAIA.backend.service;

import com.SDAIA.backend.model.MenuItem;
import com.SDAIA.backend.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    public List<MenuItem> getAllMenuItems() {
        return menuRepository.findAll();
    }

    public MenuItem getMenuItemById(Long id) {
        return menuRepository.findById(id).orElse(null);
    }

    public MenuItem saveMenuItem(MenuItem item) {
        return menuRepository.save(item);
    }

    public void deleteMenuItem(Long id) {
        menuRepository.deleteById(id);
    }
}
