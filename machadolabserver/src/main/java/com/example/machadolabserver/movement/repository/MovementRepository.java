package com.example.machadolabserver.movement.repository;

import com.example.machadolabserver.movement.entity.MovementEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovementRepository extends JpaRepository<MovementEntity, Long> {
}
