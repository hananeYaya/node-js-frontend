import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly http: HttpClient) { }

  sGetProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products/allproducts')
  }
}
