package com.example.machadolabserver.farm.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="farm")
public class FarmEntity {

    @Id
    @Column(name = "farm_id")
    private Long farmId;

    @Column(name = "farm_name")
    private String farmName;

    @Column(name = "farm_st_no")
    private Long farmStreetNo;

    @Column(name = "farm_st_name")
    private String farmStreetName;

    @Column(name = "farm_city")
    private String farmCity;

    @Column(name = "farm_state")
    private String farmState;

    @Column(name = "farm_postal_code")
    private String farmPostalCode;

    @Column(name = "farm_prem_id")
    private String farmPremId;

    @Column(name = "farm_lon")
    private double farmLongitude;

    @Column(name = "farm_lat")
    private double farmLatitude;

}
