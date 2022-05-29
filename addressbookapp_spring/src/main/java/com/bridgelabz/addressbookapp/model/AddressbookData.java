package com.bridgelabz.addressbookapp.model;

import com.bridgelabz.addressbookapp.dto.AddressbookDTO;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="contact_table")
public class AddressbookData {
    @Id
    @Column(name = "person_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int personId;
    private String fullName;
//    private String lastName;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;

//    private String email;


    public AddressbookData( AddressbookDTO addressbookDTO) {
        this.updateAddressBookdata(addressbookDTO);

    }

    public AddressbookData() {

    }

    public void updateAddressBookdata(AddressbookDTO addressbookDTO) {
        this.fullName = addressbookDTO.fullName;
//        this.lastName = addressbookDTO.lastName;
        this.phone = addressbookDTO.phone;
        this.address = addressbookDTO.address;
        this.city = addressbookDTO.city;
        this.state = addressbookDTO.state;
        this.zip = addressbookDTO.zip;

//        this.email = addressbookDTO.email;
    }
}
