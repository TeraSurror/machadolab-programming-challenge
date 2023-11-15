package com.example.machadolabserver.farm.service;

import com.example.machadolabserver.farm.dto.FarmDto;
import com.example.machadolabserver.farm.entity.FarmEntity;
import com.example.machadolabserver.farm.repository.FarmRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;

    public List<FarmDto> getAllFarmData() {
        ModelMapper modelMapper = new ModelMapper();

        List<FarmEntity> farmEntityList = farmRepository.findAll();
        List<FarmDto> farmDtoList = farmEntityList.stream()
                .map(farm -> modelMapper.map(farm, FarmDto.class))
                .toList();

        return farmDtoList;
    }

}
