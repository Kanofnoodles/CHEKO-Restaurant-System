package com.SDAIA.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "menu")
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
}
