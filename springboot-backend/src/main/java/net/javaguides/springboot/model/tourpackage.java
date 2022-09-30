package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tourpackage")
public class tourpackage {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long package_id;
	@Column(name="sourec_place")
    private String source_place;
	@Column(name="basic_fair")
    private double basic_fair;
	@Column(name="destination_place")
    private String destination_place;
    
	public tourpackage() {
		super();
		// TODO Auto-generated constructor stub
	}
	public tourpackage(long package_id, String source_place, double basic_fair, String destination_place) {
		super();
		this.package_id = package_id;
		this.source_place = source_place;
		this.basic_fair = basic_fair;
		this.destination_place = destination_place;
	}
	public long getPackage_id() {
		return package_id;
	}
	public void setPackage_id(long package_id) {
		this.package_id = package_id;
	}
	public String getSource_place() {
		return source_place;
	}
	public void setSource_place(String source_place) {
		this.source_place = source_place;
	}
	public double getBasic_fair() {
		return basic_fair;
	}
	public void setBasic_fair(double basic_fair) {
		this.basic_fair = basic_fair;
	}
	public String getDestination_place() {
		return destination_place;
	}
	public void setDestination_place(String destination_place) {
		this.destination_place = destination_place;
	}
	@Override
	public String toString() {
		return "tourpackage [package_id=" + package_id + ", source_place=" + source_place + ", basic_fair=" + basic_fair
				+ ", destination_place=" + destination_place + "]";
	}
     

}
