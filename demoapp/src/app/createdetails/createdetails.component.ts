import { Component, OnInit } from '@angular/core';
import { Tourpackage } from '../tourpackage';
import { TourpackageService } from '../tourpackage.service';

@Component({
  selector: 'app-createdetails',
  templateUrl: './createdetails.component.html',
  styleUrls: ['./createdetails.component.css']
})
export class CreatedetailsComponent implements OnInit {
mytour:Tourpackage=new Tourpackage();
  constructor(private tourservice:TourpackageService) { }

  ngOnInit(): void {
  }
  savetour(){
    this.tourservice.createPackage(this.mytour).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error))
  }
  onSubmit(){
  console.log(this.mytour);
  }

}
