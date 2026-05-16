package com.example.skillsheet.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.skillsheet.entity.SkillSheet;
import com.example.skillsheet.service.SkillSheetService;

public class SkillSheetController {

    private final SkillSheetService service;

    public SkillSheetController(SkillSheetService service) {
        this.service = service;
    }

    @GetMapping
    public List<SkillSheet> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public SkillSheet getOne(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public SkillSheet create(@RequestBody SkillSheet sheet) {
        return service.save(sheet);
    }

    @PutMapping("/{id}")
    public SkillSheet update(@PathVariable Long id, @RequestBody SkillSheet sheet) {
        sheet.setId(id);
        return service.save(sheet);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
