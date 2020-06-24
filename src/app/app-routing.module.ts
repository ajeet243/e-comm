import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import {ProductComponent} from './Components/product/product.component';
import {  AddProductComponent} from './Components/add-product/add-product.component';
import { ProdDetailsComponent } from './Components/prod-details/prod-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Footer',component:FooterComponent},
  {path:'details/:id',component:ProdDetailsComponent},
  {path:'prod',component:ProductComponent},
  {path:'AddProduct',component:AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
