import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one-prouduct',
  templateUrl: './one-prouduct.component.html',
  styleUrls: ['./one-prouduct.component.css']
})
export class OneProuductComponent implements OnInit, OnDestroy{
  product!: {id:number, name:string}
  paramsSubscription!:Subscription
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.product ={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
   this.paramsSubscription= this.route.params.subscribe(
      (params:Params)=>{
        this.product.id = params['id'];
        this.product.name = params['name']
      }
    )
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

}
