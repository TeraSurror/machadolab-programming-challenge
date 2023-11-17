package com.example.machadolabserver.farm.service;

import com.example.machadolabserver.farm.dto.FarmDto;
import com.example.machadolabserver.farm.entity.FarmEntity;
import com.example.machadolabserver.farm.repository.FarmRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;

    public List<FarmDto> getAllFarmData() {
        ModelMapper modelMapper = new ModelMapper();

        // Get data farm data from the database
        List<FarmEntity> farmEntityList = farmRepository.findAll();

        // Convert entity to DTO
        List<FarmDto> farmDtoList = farmEntityList.stream()
                .map(farm -> modelMapper.map(farm, FarmDto.class))
                .toList();

        return farmDtoList;
    }

    public List<FarmDto> getFarmDataFromIds(String farmId1, String farmId2) {
        ModelMapper modelMapper = new ModelMapper();

        // Get data farm data from the database
        List<FarmEntity> farmEntityList = farmRepository.getFarmsFromIds(farmId1, farmId2);

        // Convert entity to DTO
        List<FarmDto> farmDtoList = farmEntityList.stream()
                .map(farm -> modelMapper.map(farm, FarmDto.class))
                .toList();

        return farmDtoList;
    }
}
