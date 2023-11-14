package com.example.machadolabserver.farm.controller;

import com.example.machadolabserver.farm.entity.FarmEntity;
import com.example.machadolabserver.farm.service.FarmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/farm")
public class FarmController {

    @Autowired
    private FarmService farmService;

    @GetMapping("/all")
    public ResponseEntity<List<FarmEntity>> getAllFarmData() {
        return ResponseEntity.ok(farmService.getAllFarmData());
    }

}
