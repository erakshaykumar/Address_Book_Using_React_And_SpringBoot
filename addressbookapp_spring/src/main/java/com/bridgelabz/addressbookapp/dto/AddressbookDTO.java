package com.bridgelabz.addressbookapp.dto;

import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Data
@ToString
public class AddressbookDTO {
    @Pattern(regexp = "^[A-Z]{1}[a-zA-Z\\s]{2,}$", message = "Invalid FullName")
    @NotEmpty(message = "FullName Cannot Be Null")
    public String fullName;

    @Pattern(regexp = "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",message = "Invalid Phone Number")
    @NotEmpty(message = "Phone Number Is Not Empty")
    public String phone;

    @NotEmpty(message = "Address Should Not Be Empty")
    public String address;

    @Pattern(regexp = "^[A-Z]{1}[a-zA-Z\\s]{2,}$", message = "Invalid City Name")
    @NotEmpty(message = "City Name Cannot Be Null")
    public String city;

    @Pattern(regexp = "^[A-Z]{1}[a-zA-Z\\s]{2,}$", message = "Invalid State Name")
    @NotEmpty(message = "State Name Cannot Be Null")
    public String state;

    @Pattern(regexp = "^[0-9]{3}[\\\\s]*[0-9]{2,}$",message = "Invalid Zip Name")
    @NotEmpty(message = "Zip Code Must Not Be Null")
    public String zip;

}
