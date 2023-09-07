package com.example.rolex_be.dto.response;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;

public class JwtResponse {
    String token;
    private String name;
    private String roles;

    public JwtResponse() {
    }

    public JwtResponse(String token, String name, String roles) {
        this.token = token;

        this.name = name;
        this.roles = roles;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }
}