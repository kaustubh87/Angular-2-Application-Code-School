import { CarPart } from './car-part';

export const CARPARTS: CarPart[] = [{
    'id': 1,
    'name' : 'Super Tires',
    'description': 'These tires are very best',
    'inStock' : 5,
    'price' : 4.99,
    'image' : '/images/car-parts-1.png'
  },
  {
  'id': 2,
  'name' : 'Reinforced Tires',
  'description': 'Shocks made fro mkryptonite',
  'inStock' : 4,
  'price': 9.99,
  'image' : 'images/car-parts-2.png'
  },
  {
  'id' : 3,
  'name' : 'Padded Seats',
  'description': 'Super soft seats for smooth ride',
  'inStock' : 0,
  'price': 10.99,
  'image': '../app/images/car-parts-3.png'
  }];
