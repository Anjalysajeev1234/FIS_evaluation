import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourpackage } from './tourpackage';

@Injectable({
  providedIn: 'root'
})
export class TourpackageService {
private baseURL="http://localhost:8080/api/v1/tourpackage";
  constructor(private httpClient:HttpClient) { }
    getPackageList():Observable<Tourpackage[]>{
      return this.httpClient.get<Tourpackage[]>(`${this.baseURL}`)
    }
    createPackage(mytour:Tourpackage):Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`,mytour);
    }  }
 
