package net.javaguides.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.javaguides.springboot.model.tourpackage;
import net.javaguides.springboot.repository.TourRepository;

@Component
public class TourService {
	@Autowired
TourRepository tourdata;
	private static final int GST=12;
	
	
	
	public tourpackage get(Long package_id) {
		return tourdata.findById(package_id).orElseThrow(()->new RuntimeException("no tour with id:"+package_id));
		
	}
	public tourpackage create(tourpackage tour) {
		return tourdata.save(tour);
	}
	public double calculate(Long package_id,int nodays) {
		tourpackage tour=get(package_id);
		double packagefare=tour.getBasic_fair()*nodays;
		double discountfare=packagefare-(packagefare*getDiscount(nodays) / 100);
		double totalcost=discountfare+(discountfare*GST/100);
		return totalcost;
		}
	public int getDiscount(int nodays) {
		int discount=0;
		if(nodays>5&&nodays<=8) {
			discount=3;
			
		}else if (nodays>8 &&nodays<=10) {
			discount=5;
		}
		if(nodays>10) {
			discount=7;
		}
		return discount;
	}
	public List<tourpackage> getAll(){
		return tourdata.findAll();
	}
}
