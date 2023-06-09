import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BirraServService {

  readonly BASE_URL = 'https://api.openbrewerydb.org/v1/breweries'

  constructor(private http: HttpClient) {
    this.getBeersAPI()
  }

  getBeersAPI(): Observable<any> {
    return this.http.get<any>(this.BASE_URL);
  }


  // getBrewery(){
  //   return this.http.get<any>(this.BASE_URL).pipe()
  // }



}
