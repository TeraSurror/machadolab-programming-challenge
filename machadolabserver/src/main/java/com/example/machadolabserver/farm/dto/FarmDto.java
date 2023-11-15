package com.example.machadolabserver.farm.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FarmDto {
        @JsonProperty("farm_id")
        private Long farmId;

        @JsonProperty("farm_name")
        private String farmName;

        @JsonProperty("farm_street_no")
        private Long farmStreetNo;

        @JsonProperty("farm_street_name")
        private String farmStreetName;

        @JsonProperty("farm_city")
        private String farmCity;

        @JsonProperty("farm_state")
        private String farmState;

        @JsonProperty("farm_postal_code")
        private String farmPostalCode;

        @JsonProperty("farm_prem_id")
        private String farmPremId;

        @JsonProperty("farm_longitude")
        private double farmLongitude;

        @JsonProperty("farm_latitude")
        private double farmLatitude;
}
