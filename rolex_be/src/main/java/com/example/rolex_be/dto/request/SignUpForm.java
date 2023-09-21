package com.example.rolex_be.dto.request;

import com.example.rolex_be.model.Role;

import javax.validation.constraints.NotBlank;


public class SignUpForm {
    @NotBlank(message = "Tên người dùng không được để trống")
    private String nameUser;
    @NotBlank(message = "Ngày sinh không được để trống")
    private String dayOfBirth;

    private boolean gender;

    @NotBlank(message = "Email không được để trống")
    private String email;

    private String address;
    private String passwords;

    @NotBlank(message = "Số điện thoại được để trống")
    private String phone;
    private Role role;

    public SignUpForm() {
    }

    public SignUpForm(String nameUser, String dayOfBirth, boolean gender, String email, String address, String phone, Role role) {
        this.nameUser = nameUser;
        this.dayOfBirth = dayOfBirth;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.role = role;
    }

    public SignUpForm(String nameUser, String dayOfBirth, boolean gender, String email, String address, String passwords, String phone, Role role) {
        this.nameUser = nameUser;
        this.dayOfBirth = dayOfBirth;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.passwords = passwords;
        this.phone = phone;
        this.role = role;
    }

    public String getPasswords() {
        return passwords;
    }

    public void setPasswords(String passwords) {
        this.passwords = passwords;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
