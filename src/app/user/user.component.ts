import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user!:{id:number,name:string}
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { 
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

 //Below Function will listedn the route  queryParameter data Continuosly/reactively
this.activatedRoute.queryParams.subscribe((queryParameterData)=>{
console.log(queryParameterData)
})

 //Below Function will listedn the route  Fragment data Continuosly/reactively
this.activatedRoute.fragment.subscribe((fragmentRouteData)=>{
console.log(fragmentRouteData)
})

//Getting queryParameter and Fragment Data from the URL  
console.log(this.activatedRoute.snapshot.queryParams)
console.log(this.activatedRoute.snapshot.fragment)
}

  ngOnInit(): void {
  }
  //Simple Router  with query Parameters with fragment from TS file 
  getRamaDetails(){
    this.router.navigate(['/user',2,'Rama'],{queryParams:{page:1,search:'Rama'},fragment:'loading'})
  }

  // Preserve or Merge teh Query Parameter by Forwording with queryparamshanling in Angular
  oneditUser(){
 this.router.navigate(['/users/user',this.user.id,this.user.name,'edit'],{
   //You can preserve the queryParams to teh next route using queryParamsHandling:'preserve'
   queryParamsHandling:'preserve',
     //You can merge the queryParams to the next route using queryParamsHandling:'merge'
    // queryParamsHandling:'merge'
 })
  }
}
