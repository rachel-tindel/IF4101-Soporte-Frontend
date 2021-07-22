import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Supporter } from '../../models/supporter.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  supporter:Supporter = new Supporter();
  
  constructor( private clientService:ClientService) { }

  ngOnInit(): void {
    this.supporter=this.clientService.supporter;
  }

}
