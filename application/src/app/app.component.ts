import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  template: `<h1>{{ title }}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';
}
