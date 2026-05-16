package com.example.skillsheet.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class SkillSheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String periodFrom;
    private String periodTo;

    private String members;

    @Column(columnDefinition = "TEXT")
    private String stack;

    @Column(columnDefinition = "TEXT")
    private String tools;

    @Column(columnDefinition = "TEXT")
    private String description;
}
