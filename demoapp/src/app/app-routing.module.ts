import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatedetailsComponent } from './createdetails/createdetails.component';
import { FindcostComponent } from './findcost/findcost.component';
import { TourpackagelistComponent } from './tourpackagelist/tourpackagelist.component';

const routes: Routes = [
  {path:'tourpackages',component:TourpackagelistComponent},
  {path:'',redirectTo:'tourpackages',pathMatch:'full'},
  {path:'addpackage',component:CreatedetailsComponent},
  {path:'costcompute',component:FindcostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
