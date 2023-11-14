package com.example.machadolabserver.movement.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="movement")
public class MovementEntity {

    @Id
    @Column(name = "movement_id")
    private Long movementId;

    @Column(name = "account_company")
    private String accountCompany;

    @Column(name = "new_movementreason")
    private String newMovementReason;

    @Column(name = "new_species")
    private String newSpecies;

    @Column(name = "new_originpremid")
    private String newOriginPremId;

    @Column(name = "new_destinationpremid")
    private String newDestinationPremId;

    @Column(name = "new_numitemsmoved")
    private Long newNumItemsMoved;

    @Column(name = "new_shipmentsstartdate")
    private String newShipmentStartDate;
}
