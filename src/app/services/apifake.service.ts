import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApifakeService {

  private urlApi = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { 
    
  }

  public getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.urlApi);
  }

  public getDataById(id: number|string): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.urlApi}/${id}`);
  }

  public getDataByIdAfter(id: number|string): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.urlApi}/${id}`);
  }

}
