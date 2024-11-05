import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faDribbble, faBehance, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
