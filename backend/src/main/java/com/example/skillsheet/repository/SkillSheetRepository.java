package com.example.skillsheet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.skillsheet.entity.SkillSheet;

@Repository
public interface SkillSheetRepository extends JpaRepository<SkillSheet, Long> {
}
