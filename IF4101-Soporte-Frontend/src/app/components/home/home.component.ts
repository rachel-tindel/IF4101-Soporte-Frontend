import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { Supporter } from '../../models/supporter.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  supporter:Supporter;
  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit(): void {
this.supporter = this.clientService.supporter;
  }

}
