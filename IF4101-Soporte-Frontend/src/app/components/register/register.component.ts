import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { Supporter } from '../../models/supporter.model';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  newSupport:Supporter=new Supporter();

  public registerForm = this.fb.group({
    id:0,
    name : ['',[ Validators.required]],
    firstsurname : ['',[ Validators.required]],
    secondsurname : ['',[ Validators.required]],
    email : ['',[ Validators.required, Validators.email]],
    password : ['',[ Validators.required, Validators.minLength(8)]],

    cable : false,
    mobilephone : false,
    telephone : false,
    internet : false,

  });

  constructor(  private fb:FormBuilder,
                private router:Router,
                private clientService:ClientService) { }

  ngOnInit(): void {
  }

 createUser(){

    if(!this.serviceValid){
      return;
    }

    if(this.registerForm.invalid){
      return;
    }

      this.newSupport.nameSupporter=this.registerForm.get("name").value;
      this.newSupport.firstSurnameSupporter=this.registerForm.get("firstsurname").value;
      this.newSupport.secondSurnameSupporter=this.registerForm.get("secondsurname").value;
      this.newSupport.emailSupporter=this.registerForm.get("email").value;
      this.newSupport.password=this.registerForm.get("password").value;

      this.registerForm.get("cable").value ?this.newSupport.cable=1 :this.newSupport.cable=0;
      this.registerForm.get("internet").value?this.newSupport.internet=1:this.newSupport.internet=0;
      this.registerForm.get("mobilephone").value?this.newSupport.mobilephone=1:this.newSupport.mobilephone=0;
      this.registerForm.get("telephone").value?this.newSupport.telephone= 1:this.newSupport.telephone= 0;


    this.clientService.addSupport(this.newSupport)
    .subscribe( resp =>{
        this.modal('/support-list','Registro Exitoso')
    });
  }

  valueNoValid(value:string) {
    return this.registerForm.get(value).invalid && this.registerForm.get(value).touched
  }

 get serviceValid() {

    if(this.registerForm.get('cable').value){
      return true;
    }
    if(this.registerForm.get('mobilephone').value){
      return true;
    }
    if(this.registerForm.get('telephone').value){
      return true;
    }
    if(this.registerForm.get('internet').value){
      return true;
    }
    return false;
  }

  modal( url:string | '', message:String){
    let timerInterval
        Swal.fire({
        title: message,
        html: '',
        timer: 1000,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
          }, 50)
        },
        willClose: () => {
        clearInterval(timerInterval)
        }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            this.router.navigateByUrl(url);
          }
        })
  }
}
