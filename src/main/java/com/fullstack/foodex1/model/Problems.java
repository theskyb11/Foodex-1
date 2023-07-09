package com.fullstack.foodex1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Problems")
public class Problems {
    @Id
    private Integer id;
    private String name;
    private String email_id;
    private String problem;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public String getProblem() {
        return problem;
    }

    public void setProblem(String problem) {
        this.problem = problem;
    }

    public Problems() {
    }

    public Problems(Integer id, String name, String email_id, String problem) {
        this.id = id;
        this.name = name;
        this.email_id = email_id;
        this.problem = problem;
    }
}
