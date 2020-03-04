import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _cookNService: cookNService) { }

  ngOnInit() {
  }

}
