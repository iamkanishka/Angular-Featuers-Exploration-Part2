import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    //Getting Static Data from the Route 
    this,activatedRoute.data.subscribe((data:Data)=>{
    console.log(data)
    })
   }

  ngOnInit(): void {
  }

}
