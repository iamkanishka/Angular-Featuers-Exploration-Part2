import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user!:{id:number,name:string}
  constructor(private activatedRoute:ActivatedRoute) { 
   this.user={
   id: Number(this.activatedRoute.snapshot.params['id']),
   name: String(this.activatedRoute.snapshot.params['name'])

 }
 console.log(this.user)
}

  ngOnInit(): void {
  }

}
