import { CarPart } from './car-part';

export const CARPARTS: CarPart[] = [{
    'id': 1,
    'name' : 'Super Tires',
    'description': 'These tires are very best',
    'inStock' : 5,
    'price' : 4.99,
    'image' : 'assets/images/tires.png',
    'featured' : false
  },
  {
  'id': 2,
  'name' : 'Reinforced Tires',
  'description': 'Shocks made fro mkryptonite',
  'inStock' : 4,
  'price': 9.99,
  'image' : 'assets/images/tires-2.png',
  'featured': false
  },
  {
  'id' : 3,
  'name' : 'Padded Seats',
  'description': 'Super soft seats for smooth ride',
  'inStock' : 0,
  'price': 10.99,
  'image': 'assets/images/seats.png',
  'featured' : false
  }];
