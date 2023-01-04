import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList!: Product[]
 
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProductList()
  }
 
  getProductList(){
    this.service.getProductsList().subscribe( data => {
       this.productList = data 
    })
  }
   
}
