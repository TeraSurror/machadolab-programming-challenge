package com.example.machadolabserver.farm.controller;

import com.example.machadolabserver.farm.dto.FarmDto;
import com.example.machadolabserver.farm.service.FarmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/farm")
public class FarmController {

    @Autowired
    private FarmService farmService;

    @GetMapping("/all")
    public ResponseEntity<List<FarmDto>> getAllFarmData() {
        return ResponseEntity.ok(farmService.getAllFarmData());
    }

    @GetMapping("/farm-details/{farmId1}/{farmId2}")
    public ResponseEntity<List<FarmDto>> getFarmDetailsFromIds(
            @PathVariable String farmId1,
            @PathVariable String farmId2
    ) {
        return ResponseEntity.ok(farmService.getFarmDataFromIds(farmId1, farmId2));
    }

}
