import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.scss']
})
export class FilterPipesComponent implements OnInit {

  filterstring!:string
  users =[{
    name:'kanishka',
    joinedDate : new Date(15,3,2017)
  },
  {
    name:'Rama',
    joinedDate : new Date(15,5,2018)
  },
  {
    name:'Krishna',
    joinedDate : new Date(15,7,2017)
  }
]

  constructor() { }

  ngOnInit(): void {
  }
  onAdduser(){
    this.users.push({name:'Vishnu',joinedDate:new Date(12,12,2001)})
  }

}
