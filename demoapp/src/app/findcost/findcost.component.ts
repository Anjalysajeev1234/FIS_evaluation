import { Component, OnInit } from '@angular/core';
import { Tourpackage } from '../tourpackage';

@Component({
  selector: 'app-findcost',
  templateUrl: './findcost.component.html',
  styleUrls: ['./findcost.component.css']
})
export class FindcostComponent implements OnInit {
  mytour:Tourpackage=new Tourpackage();
  constructor() { }

  ngOnInit(): void {
  }
  
}
