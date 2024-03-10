import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "home" , component: HomeComponent},
  {path: "products" , component: ProductsComponent},
  {path: "products/:productID" , component: ProductDetailComponent},
  {path: "aboutUs" , component: AboutUsComponent},
  {path: "contact" , component: ContactComponent},
  {path: "" , redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
