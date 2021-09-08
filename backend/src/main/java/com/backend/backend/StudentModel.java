package com.backend.backend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "students")
public class StudentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "nic")
    private String nic;
    @Column(name = "name_with_init")
    private String namewithinit;
    @Column(name = "full_name")
    private String fullname;
    @Column(name = "address_line_1")
    private String addressline1;
    @Column(name = "address_line_2")
    private String addressline2;
    @Column(name = "city")
    private String city;
    @Column(name = "school")
    private String school;

    public StudentModel(){
        
    }

    public StudentModel(String nic, String namewithinit, String fullname, String addressline1, String addressline2,
            String city, String school) {
        this.nic = nic;
        this.namewithinit = namewithinit;
        this.fullname = fullname;
        this.addressline1 = addressline1;
        this.addressline2 = addressline2;
        this.city = city;
        this.school = school;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getNamewithinit() {
        return namewithinit;
    }

    public void setNamewithinit(String namewithinit) {
        this.namewithinit = namewithinit;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getAddressline1() {
        return addressline1;
    }

    public void setAddressline1(String addressline1) {
        this.addressline1 = addressline1;
    }

    public String getAddressline2() {
        return addressline2;
    }

    public void setAddressline2(String addressline2) {
        this.addressline2 = addressline2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

}
