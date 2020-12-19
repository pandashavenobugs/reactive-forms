import { Component,OnInit } from '@angular/core';
// initializing the system of form group
import {FormBuilder,FormGroup} from "@angular/forms";
import {Subscription} from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  formSubs:Subscription;


  myform:FormGroup; // if we want to use reactive form, we have to initialize the form system

  constructor(private formBuilder:FormBuilder){}
  ngOnInit():void{
    this.myform= this.formBuilder.group({
      email:'',
      message:'',
      career:'',
    })
    this.formSubs=this.myform.valueChanges.
    subscribe(changes=>{
      console.log(changes);
    })
  }


}
