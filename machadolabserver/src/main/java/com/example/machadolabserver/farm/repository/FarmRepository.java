package com.example.machadolabserver.farm.repository;

import com.example.machadolabserver.farm.entity.FarmEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FarmRepository extends JpaRepository<FarmEntity, Long> {
    @Query(nativeQuery = true,
        value = "SELECT * FROM farm where farm_prem_id IN (:farmId1, :farmId2)"
    )
    List<FarmEntity> getFarmsFromIds(String farmId1, String farmId2);
}
