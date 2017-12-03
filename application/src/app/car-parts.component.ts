import { Component } from '@angular/core';

@Component({
  selector: 'car-parts',
  template: `<h1>{{ title }}</h1>
  <p>There are {{ totalCarParts() }} in stock</p>
  <ul>
    <li *ngFor="let carPart of carParts">
    <h2>{{ carPart.name | uppercase }}</h2>
    <p>{{ carPart.description }}</p>
    <p>{{ carPart.price | currency : 'USD' :true }}</p>
    <p *ngIf="carPart.inStock > 0"> {{ carPart.inStock }} in Stock.</p>
    <p *ngIf="carPart.inStock === 0">Out of Stock</p>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})

export class CarPartsComponent {
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

    totalCarParts() {
      let sum = 0;
      for (let carPart of this.carParts){
        sum += carPart.inStock;
      }

      return sum;
    }
}