import { Component,OnInit } from '@angular/core';
// initializing the system of form group
import {FormBuilder,FormGroup,FormArray} from "@angular/forms";
import {Subscription} from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  formSubs:Subscription;


  myForm:FormGroup; // if we want to use reactive form, we have to initialize the form system

  constructor(private formBuilder:FormBuilder){}
  ngOnInit():void{
    // this.myform= this.formBuilder.group({
    //   email:'',
    //   message:'',
    //   career:'',
    // })
    // this.formSubs=this.myform.valueChanges.
    // subscribe(changes=>{
    //   console.log(changes);
    // })

    // we can use formGroups in other formGroups
    this.myForm = this.formBuilder.group({
      email:'',
      phones:this.formBuilder.array([])
    });
    console.log(this.phoneForms);
  }

  get phoneForms(){
    // we use phones property as a formArray so
    // phones property is collect of formGroups
    return this.myForm.get('phones') as FormArray;
  }

  addPhone(){
    const phone = this.formBuilder.group({
      area:[],
      prefix:[],
      line:[]
    })
    this.phoneForms.push(phone);
  }

  deletePhone(i){
    this.phoneForms.removeAt(i);
  }


}
