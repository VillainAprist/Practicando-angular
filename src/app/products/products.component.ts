import { Component, OnInit } from '@angular/core';
import { ApifakeService } from '../services/apifake.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
    
  data?: IProduct[] = [];
  
  constructor(private apiService: ApifakeService){}

  ngOnInit(): void {
    this.llenarData();
    
    
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(data);
    })
  }

  ordenarPorPrecioMaximo() {
    this.data?.sort((a, b) => b.price - a.price); 
  }

  ordenarPorPrecioId() {
    this.data?.sort((a, b) => a.id - b.id); 
  }

  ordenarPorPrecioMinimo() {
    this.data?.sort((a, b) => a.price - b.price);
  }


}
