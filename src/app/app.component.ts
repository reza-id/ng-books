import { Component } from '@angular/core';

@Component({
  selector: 'bs-app',
  template: `
  <h1>{{appTitle}}</h1>
  <div>App Component Test</div>
  `
})
export class AppComponent {
  appTitle = 'Dev Book Store';
}
