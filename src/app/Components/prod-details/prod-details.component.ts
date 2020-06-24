import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  public count=0;
  public tspecs:any;

  public param1:any;
  public userid:number;
  public quantity:number;
  public price:number;
  products=[
    {
      "id":1,
      "img_url":'https://cdn.shopify.com/s/files/1/2286/5823/products/ImageUrl_Nokia_Symbian_2XXX_2760_800x.jpg?v=1539883337',
      "Title":"Nokia",
      "Description":"Nokia Description",
      "Price":700,
      "Votes":34,
      "likePercentage":77
    },
    {
      "id":2,
      "img_url":'https://drop.ndtv.com/TECH/product_database/images/3292016113637AM_635_samsung_galaxy_j5_2016.jpeg',
      "Title":"Samsung",
      "Description":"Samsung Description",
      "Price":1900,
      "Votes":64,
      "likePercentage":19
     },
    {
      "id":3,
      "img_url":'https://i01.appmifile.com/webfile/globalimg/in/cms/C242F83B-6939-035E-6201-F7F739B24211.jpg',
      "Title":"MI",
      
      "Price":200,
      "Description":"Nice Good Odd Products.",
      "Votes":100,
      "likePercentage":1
    },
    {
      "id":4,
      "img_url":'https://c.ndtvimg.com/2019-08/hcnalbbo_gadgets-360_640x480_14_August_19.jpg',
      "Title":"VIVO",
      "Price":3000,
      "Description":"Nice Good Odd Products.",
      "Votes":19,
      "likePercentage":59
    },
    {
      "id":5,
      "img_url":'https://www.bajajfinserv.in/OPPO_A9_(8GB)_FlagshipProduct-Oppo-A9_280X280_Flagship_Banner.png',
      "Title":"Oppo",
      "Description":"Oppo Description",
      "Price":1200,
      "Votes":14,
      "likePercentage":87
    },
    // {
    //   "id":6,
    //   "img_url":'https://lh3.googleusercontent.com/proxy/D1L3NVDpe_941UAGYikR9xyVb81ed_FvvYFu0no6JyQmXx6h3z8QgnjAYmrn8Chyt8bf3Q9ZVr1V8TNwETKGeipQBVg8jn5siOYVXmwutttojHWpf10wMpg3zhr83Ub2RSWM',
    //   "Title":"ViVO",
    //   "Description":"ViVO Description"
    // }
  ];
  public specs:any;
  constructor(private route: ActivatedRoute,private toaster:ToastrService) { }

  ngOnInit(): void {
    debugger;
    var prodid= this.route.snapshot.paramMap.get("id");
    this.getproductList(prodid);
  }
  addItems(param1){
    this.count++;
  }

  lessItems(param2){
    if(this.count<=0) {
      return
    }
    this.count--;  
  }
  getproductList(id){
    var data=this.products.filter(x=>x.id==parseInt(id));
    this.specs=data[0];
  }
  cart(){
    var user=localStorage.getItem('User');
    if(user==null || user==undefined || user=='')
    {
      this.toaster.warning('kindly login to Add To cart'); 
    }
    else{
      this.toaster.success('Product Successfully Added.');
    }
  }

}
