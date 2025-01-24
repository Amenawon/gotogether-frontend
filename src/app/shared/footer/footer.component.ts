import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  completeDate = new Date();

  year = this.completeDate.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
