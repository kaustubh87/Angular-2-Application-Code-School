import { Component } from '@angular/core';

@Component({
  selector: 'app-car-parts',
  templateUrl: '../app/car-parts.component.html',
  styleUrls: ['../app/car-parts.component.css']
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
