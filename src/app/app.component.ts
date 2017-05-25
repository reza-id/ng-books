import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  appTitle = 'Dev Book Store';
  searchBox: string = '';
}
