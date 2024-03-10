import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApifakeService } from '../services/apifake.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  data?: IProduct;
  dataList: IProduct[] = [];



  constructor (private _activeRoute: ActivatedRoute, private apiService: ApifakeService, private _route: Router ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe( params =>{
      this.apiService.getDataById(Number(params["productID"])).subscribe((data: IProduct)=>{
        this.data = data;   
      })
    }) 
  }
  
  nextPage(){
    console.log(this.data!.id);
    this._route.navigate(['/products', this.data!.id + 1]);
    
  }

  beforePage(){
    console.log(this.data!.id);
    this._route.navigate(['/products', this.data!.id - 1]);
    
  }
}

