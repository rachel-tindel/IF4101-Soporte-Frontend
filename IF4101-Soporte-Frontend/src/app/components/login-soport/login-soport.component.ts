import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { Supporter } from '../../models/supporter.model';
import { UpperCasePipe } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-login-soport',
  templateUrl: './login-soport.component.html',
  styleUrls: ['./login-soport.component.css']
})
export class LoginSoportComponent implements OnInit {

  @Input() loginData = { email:'', password:''};


  newSupport:Supporter=new Supporter();

  public loginForm = this.fb.group({
    email : ['',[ Validators.required, Validators.email]],
    password : ['',[ Validators.required, Validators.minLength(8)]],
  });

  constructor(  private fb:FormBuilder,
                private router:Router,
                private clientService:ClientService) { }

  ngOnInit(): void {
  }

  valueNoValid(value:string) {
    return this.loginForm.get(value).invalid && this.loginForm.get(value).touched
  }

  loginUser(){

     if(this.loginForm.invalid){
      let email = document.getElementById("email");
      let password = document.getElementById("password");
      email.classList.add("is-invalid");
      password.classList.add("is-invalid");
      return;
    }


    this.clientService.loginSupport(this.loginData.email, this.loginData.password)
    .subscribe( newSupport =>{
       if(newSupport)   {
        this.newSupport = newSupport;
        this.modal('/profile','Help-Desk TeleAtlántico');
       }else{
        this.modal('','Error al autentificarse como soportista')
       }
    });
  }

  modal( url:string | '', cargando:String){
    let timerInterval
        Swal.fire({
        title: cargando,
        background: '#8cfffb',
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

