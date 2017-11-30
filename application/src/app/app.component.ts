import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  template: `<h1>{{ title }}</h1>
  <ul>
    <li *ngFor="let carPart of carParts">
    <h2>{{ carPart.name }}</h2>
    <p>{{ carPart.description }}</p>
    <p>{{ carPart.inStock }} in Stock</p>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';

  carParts = [{
    'id': 1,
    'name' : 'Super Tires',
    'description': 'These tire sare very best',
    'inStock' : 5
  },
  {
  'id': 2,
  'name' : 'Reinforced Tires',
  'description': 'Shocks made fro mkryptonite',
  'inStock' : 4
  },
  {
  'id' : 3,
  'name' : 'Padded Seats',
  'description': 'Super soft seats for smooth ride',
  'inStock' : 0


  }];
}
