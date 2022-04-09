import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Subscription, interval, Observable, observable} from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  intervalSubscription!:Subscription
  customcountObservable!:Observable<number>
  customcountObservableSubscription!:Subscription
  constructor(private activatedRoute:ActivatedRoute) {
    //Getting Static Data from the Route 
  
    this.activatedRoute.data.subscribe((data:Data)=>{
    console.log(data)
    }, error=>{
     console.log(error);
     
    }
    )
 }

  ngOnInit(): void {
  //  this.intervalSubscription = interval(1000).subscribe((count:number)=>{
  //     console.log(count)
  //   })


    //Creating Custom Varaible
    // this.customcountObservable = Observable.create((observer: any)=>{
    // let count = 0
    //   setInterval(()=>{
    //   observer.next(count)
    // count++
    //   },1000)
    // })


 //Creating Custom Varaible with error handle, with complete
 this.customcountObservable = Observable.create((observer: any)=>{
  let count = 0
    setInterval(()=>{
    observer.next(count)
    if(count>3){
      observer.error('Count is greater than 3')
    }
    if(count>2){
      observer.complete()
    }
    count++
    },1000)
  })


   this.customcountObservableSubscription= this.customcountObservable.subscribe(data=>{
   console.log(data);
   
    },(error)=>{
      console.log(error);
      
    },()=>{
console.log('completed');

    })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  //  this.intervalSubscription.unsubscribe()



  //Unsuscribing the cusutom observable
  this.customcountObservableSubscription.unsubscribe()

    //Note:- The Observable that are defined in the route will self destroy , the observable which are defined by user, shoul be be manually destroyed 
  }

}
