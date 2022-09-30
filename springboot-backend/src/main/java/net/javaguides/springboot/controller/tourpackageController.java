package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.tourpackage;
import net.javaguides.springboot.repository.TourRepository;
import net.javaguides.springboot.services.TourService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class tourpackageController {

	@Autowired
	private TourRepository tourRepository;
	@Autowired
	private TourService tourservice;

	// get all tour package details
	@GetMapping("/tourpackage")
	public List<tourpackage> getAlltourpackage() {
		return tourRepository.findAll();
	}

	@GetMapping("/tourpackage/{tourid}")
	public ResponseEntity<tourpackage> get(@PathVariable("tourid") Long Package_id) {
		return new ResponseEntity<>(tourservice.get(Package_id), HttpStatus.OK);
	}

	@PostMapping("/tourpackage")
	public ResponseEntity<tourpackage> create(@RequestBody tourpackage tour) {
		return new ResponseEntity<>(tourservice.create(tour), HttpStatus.CREATED);
	}

	@GetMapping("/tourpackage/{tourid}/cost/{nodays}")
	public ResponseEntity<Double> getcost(@PathVariable("tourid") Long package_id, @PathVariable("nodays") int nodays) {
		return new ResponseEntity<>(tourservice.calculate(package_id, nodays), HttpStatus.OK);
	}
}
