package com.example.machadolabserver.movement.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovementDto {

    @JsonProperty("movement_id")
    private Long movementId;

    @JsonProperty("account_company")
    private String accountCompany;

    @JsonProperty("movement_reason")
    private String newMovementReason;

    @JsonProperty("species")
    private String newSpecies;

    @JsonProperty("origin_prem_id")
    private String newOriginPremId;

    @JsonProperty("destination_prem_id")
    private String newDestinationPremId;

    @JsonProperty("num_items_moved")
    private Long newNumItemsMoved;

    @JsonProperty("shipments_start_date")
    private String newShipmentStartDate;
}
