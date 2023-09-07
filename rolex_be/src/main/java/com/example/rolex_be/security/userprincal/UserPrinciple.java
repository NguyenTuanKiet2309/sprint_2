package com.example.rolex_be.security.userprincal;

import com.example.rolex_be.model.Account;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


public class UserPrinciple implements UserDetails {
    private String accountName;
    @JsonIgnore
    private String password;
    private Collection<? extends GrantedAuthority> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }


    public UserPrinciple() {
    }

    public UserPrinciple(int id, String accountName, String password, Collection<? extends GrantedAuthority> roles) {
        this.accountName = accountName;
        this.password = password;
        this.roles = roles;
    }

    public static UserPrinciple build(Account account) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(account.getRoleId().getNameRole()));
        return new UserPrinciple(
                account.getIdAccount() ,
                account.getUsername(),
                account.getPasswords(),
                authorities
        );
    }




    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return accountName;
    }



    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}