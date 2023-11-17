package com.example.machadolabserver.movement.service;

import com.example.machadolabserver.movement.dto.MovementDto;
import com.example.machadolabserver.movement.entity.MovementEntity;
import com.example.machadolabserver.movement.repository.MovementRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovementService {

    @Autowired
    private MovementRepository movementRepository;

    public List<MovementDto> getAllMovementData() {
        ModelMapper modelMapper = new ModelMapper();
        // Get data farm data from the database
        List<MovementEntity> movementEntityList = movementRepository.findAll();

        // Convert entity to DTO
        List<MovementDto> movementDtoList = movementEntityList.stream()
                .map(movement -> modelMapper.map(movement, MovementDto.class))
                .toList();

        return movementDtoList;
    }
}
