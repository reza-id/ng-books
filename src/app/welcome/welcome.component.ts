import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle: string = 'Welcome';

  constructor() { }

  ngOnInit() {
  }

}
