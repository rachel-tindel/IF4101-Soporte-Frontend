import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-nav-bar-support',
  templateUrl: './nav-bar-support.component.html',
  styleUrls: ['./nav-bar-support.component.css']
})
export class NavBarSupportComponent implements OnInit {

  client:Client;

  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit(): void {
    this.client = this.clientService.client;
  }

  logout(){
    this.clientService.logout();
    this.router.navigate(['/login']);
  }

}
