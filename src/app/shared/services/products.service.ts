import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { products } from 'src/app/data/products';
import { Product } from 'src/app/models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
   products$ = new BehaviorSubject<Product[]>(products)

  constructor(private http: HttpClient) { }

   getProductsList(){
     return this.products$
   }
}
