import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[
    {
      "id":1,
      "src":'https://cdn.shopify.com/s/files/1/2286/5823/products/ImageUrl_Nokia_Symbian_2XXX_2760_800x.jpg?v=1539883337',
      "Title":"Nokia",
      "Description":"Nokia Description"
    },
    {
      "id":2,
      "src":'https://drop.ndtv.com/TECH/product_database/images/3292016113637AM_635_samsung_galaxy_j5_2016.jpeg',
      "Title":"Samsung",
      "Description":"Samsung Description"
     },
    {
      "id":3,
      "src":'https://i01.appmifile.com/webfile/globalimg/in/cms/C242F83B-6939-035E-6201-F7F739B24211.jpg',
      "Title":"MI",
      "Description":"MI Description"
    },
    {
      "id":4,
      "src":'https://c.ndtvimg.com/2019-08/hcnalbbo_gadgets-360_640x480_14_August_19.jpg',
      "Title":"VIVO",
      "Description":"VIVO Description"
    },
    {
      "id":5,
      "src":'https://www.bajajfinserv.in/OPPO_A9_(8GB)_FlagshipProduct-Oppo-A9_280X280_Flagship_Banner.png',
      "Title":"Oppo",
      "Description":"Oppo Description"
    },
    // {
    //   "id":6,
    //   "src":'https://lh3.googleusercontent.com/proxy/D1L3NVDpe_941UAGYikR9xyVb81ed_FvvYFu0no6JyQmXx6h3z8QgnjAYmrn8Chyt8bf3Q9ZVr1V8TNwETKGeipQBVg8jn5siOYVXmwutttojHWpf10wMpg3zhr83Ub2RSWM',
    //   "Title":"ViVO",
    //   "Description":"ViVO Description"
    // }
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  } 
  details(id){
    this.router.navigate(['/details',id]);
  }

}
