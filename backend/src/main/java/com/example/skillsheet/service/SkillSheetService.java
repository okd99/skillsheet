package com.example.skillsheet.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.skillsheet.entity.SkillSheet;
import com.example.skillsheet.repository.SkillSheetRepository;

@Service
public class SkillSheetService {

    private final SkillSheetRepository repository;

    public SkillSheetService(SkillSheetRepository repository) {
        this.repository = repository;
    }

    public List<SkillSheet> findAll() {
        return repository.findAll();
    }

    public SkillSheet findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public SkillSheet save(SkillSheet sheet) {
        return repository.save(sheet);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
