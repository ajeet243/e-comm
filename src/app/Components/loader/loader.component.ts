import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderServiceService } from 'src/app/loader-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

   
  constructor(private loaderService: LoaderServiceService){}
  ngOnInit(): void {
  }
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  

}
