import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'app-car-parts',
  templateUrl: '../app/car-parts.component.html',
  styleUrls: ['../app/car-parts.component.css']
})

export class CarPartsComponent {
  title = 'Ultra Racing';

  carParts: CarPart[];

  upQuantity(carPart) {
    // tslint:disable-next-line:curly
    if (carPart.quantity < carPart.inStock)
      carPart.quantity++;
  }

  downQuantity(carPart){
    // tslint:disable-next-line:curly
    if (carPart.quantity !== 0 )
    carPart.quantity --;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.carParts = CARPARTS;
  }

  //property binding
    totalCarParts() {
      let sum = 0;
      for (let carPart of this.carParts){
        sum += carPart.inStock;
      }

      return sum;
    }
}
