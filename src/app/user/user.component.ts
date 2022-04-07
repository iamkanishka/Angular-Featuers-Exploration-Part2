import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user!:{id:number,name:string}
  constructor(private activatedRoute:ActivatedRoute) { 
  //Fetching Data from the Routes using Activated Route
   this.user={
   id: Number(this.activatedRoute.snapshot.params['id']),
   name: String(this.activatedRoute.snapshot.params['name'])

 }
//  Note:- Once the Data is loaded in to teh Conmponent then we redirect to the same compoenent then with parametrs data 
//     then it wont reflet the updated data in the route  for that we need to use below subscribe method
 //Below Function will listedn the route parameter data Continuosly/reactively
this.activatedRoute.params.subscribe((routedata:Params)=>{
  this.user={
    id: Number(routedata['id']),
    name: String(routedata['name'])
 
  }
})
}

  ngOnInit(): void {
  }

}
