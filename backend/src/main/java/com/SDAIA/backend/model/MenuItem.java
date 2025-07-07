package com.SDAIA.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "menu_item")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuItem {

    @Id
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String image;
    private Integer calorie;
    private String category;
    private Double lat;
    private Double lng;

    @Column(nullable = false)
    private boolean isBestSale = false;
}
