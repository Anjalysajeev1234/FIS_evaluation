import { Component, OnInit } from '@angular/core';
import { Tourpackage } from '../tourpackage';
import { TourpackageService } from '../tourpackage.service';

@Component({
  selector: 'app-tourpackagelist',
  templateUrl: './tourpackagelist.component.html',
  styleUrls: ['./tourpackagelist.component.css']
})
export class TourpackagelistComponent implements OnInit {
  tours: any 
  constructor(private tourpackageService:TourpackageService) { }

  ngOnInit(): void {
    this.getTourpackages();
  }
private getTourpackages(){
  this.tourpackageService.getPackageList().subscribe(data=>{
    this.tours=data;
    console.log(this.tours)
  });

}
}
