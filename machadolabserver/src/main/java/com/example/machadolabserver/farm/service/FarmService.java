package com.example.machadolabserver.farm.service;

import com.example.machadolabserver.farm.entity.FarmEntity;
import com.example.machadolabserver.farm.repository.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;

    public List<FarmEntity> getAllFarmData() {
        return farmRepository.findAll();
    }

}
