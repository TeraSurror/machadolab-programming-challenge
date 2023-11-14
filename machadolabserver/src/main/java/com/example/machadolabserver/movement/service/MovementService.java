package com.example.machadolabserver.movement.service;

import com.example.machadolabserver.movement.entity.MovementEntity;
import com.example.machadolabserver.movement.repository.MovementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovementService {

    @Autowired
    private MovementRepository movementRepository;

    public List<MovementEntity> getAllMovementData() {
        return movementRepository.findAll();
    }
}
