import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {
  supporters:any = [];

  constructor(public rest:ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
this.getSupporters();
  }

  getSupporters() {
    this.supporters = [];
    this.rest.listSupporters().subscribe((data: {}) => {
      console.log(data);
      this.supporters = data;
    });
  }

}
