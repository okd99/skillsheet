package com.example.skillsheet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.skillsheet.entity.SkillSheet;

public interface SkillSheetRepository extends JpaRepository<SkillSheet, Long> {
}
