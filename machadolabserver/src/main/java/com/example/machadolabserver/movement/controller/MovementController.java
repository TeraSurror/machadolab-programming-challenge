package com.example.machadolabserver.movement.controller;

import com.example.machadolabserver.movement.entity.MovementEntity;
import com.example.machadolabserver.movement.service.MovementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/movement")
public class MovementController {

    @Autowired
    private MovementService movementService;

    @GetMapping("/all")
    public ResponseEntity<List<MovementEntity>> getAllMovementData() {
        return ResponseEntity.ok(movementService.getAllMovementData());
    }

}
