import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  template: `<h1>{{ title }}</h1>
  <ul>
    <li *ngFor="let carPart of carParts">
    <h2>{{ carPart.name | uppercase }}</h2>
    <p>{{ carPart.description }}</p>
    <p>{{ carPart.price | currency }}</p>
    <p *ngIf="carPart.inStock > 0"> {{ carPart.inStock }} in Stock.</p>
    <p *ngIf="carPart.inStock === 0">Out of Stock</p>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';

  carParts = [{
    'id': 1,
    'name' : 'Super Tires',
    'description': 'These tires are very best',
    'inStock' : 5,
    'price' : 4.99
  },
  {
  'id': 2,
  'name' : 'Reinforced Tires',
  'description': 'Shocks made fro mkryptonite',
  'inStock' : 4,
  'price': 9.99
  },
  {
  'id' : 3,
  'name' : 'Padded Seats',
  'description': 'Super soft seats for smooth ride',
  'inStock' : 0,
  'price': 10.99
  }];
}
