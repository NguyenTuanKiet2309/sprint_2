package com.example.rolex_be.model;

import javax.persistence.*;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAccount;
    private String username;
    private String passwords;
    @OneToOne
    @JoinColumn(name = "id_role")
    private Role roleId;

    public Account() {
    }

    public Account(int idAccount, String username, String passwords, Role roleId) {
        this.idAccount = idAccount;
        this.username = username;
        this.passwords = passwords;
        this.roleId = roleId;
    }

    public Account(String username, String passwords, Role roleId) {
        this.username = username;
        this.passwords = passwords;
        this.roleId = roleId;
    }

    public int getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(int idAccount) {
        this.idAccount = idAccount;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String email) {
        this.username = email;
    }

    public String getPasswords() {
        return passwords;
    }

    public void setPasswords(String passwords) {
        this.passwords = passwords;
    }

    public Role getRoleId() {
        return roleId;
    }

    public void setRoleId(Role roleId) {
        this.roleId = roleId;
    }
}
