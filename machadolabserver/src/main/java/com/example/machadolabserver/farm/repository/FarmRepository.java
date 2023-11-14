package com.example.machadolabserver.farm.repository;

import com.example.machadolabserver.farm.entity.FarmEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FarmRepository extends JpaRepository<FarmEntity, Long> {
}
