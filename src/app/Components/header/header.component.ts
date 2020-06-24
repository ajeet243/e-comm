import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:any="";
  isLoggedin:boolean=false;
  constructor() { 
    var _name=localStorage.getItem('user');
    if(_name!='' && _name!=undefined && _name!=null)
    {
      this.name=_name;
      this.isLoggedin=true;  
    }
  }
  logout(){
    console.log("insidelogout");
  localStorage.clear();
  window.location.reload();
  }

  ngOnInit(): void {
  }

}
