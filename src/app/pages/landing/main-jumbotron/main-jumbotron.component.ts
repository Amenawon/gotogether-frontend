import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-jumbotron',
  templateUrl: './main-jumbotron.component.html',
  styleUrls: ['./main-jumbotron.component.css']
})
export class MainJumbotronComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToViewRequirements(){
    this.router.navigate(['view-requirements']);
  }
}
