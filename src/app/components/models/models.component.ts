import { Component } from '@angular/core';
import { Car } from 'src/app/Models/car';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  
  available_cars: Car[] = [
    {
      Model: 'Chevrolet',
      Mark: 'Silverado',
      Year: 2012,
      Doors: 4,
      AC: true,
      Transmission: 'Manual',
      Fuel: 'Diesel',
      Price: 0
    },
    {
      Model: 'Ford',
      Mark: 'F150',
      Year: 2020,
      Doors: 4,
      AC: true,
      Transmission: 'Automatic',
      Fuel: 'Gasoline',
      Price: 0
    },
    {
      Model: 'Toyota',
      Mark: 'RAV4',
      Year: 2019,
      Doors: 4,
      AC: true,
      Transmission: 'Manual',
      Fuel: 'Diesel',
      Price: 0
    },
    {
      Model: 'Ram',
      Mark: '1500',
      Year: 2023,
      Doors: 4,
      AC: true,
      Transmission: 'Automatic',
      Fuel: 'Gasoline',
      Price: 0
    },
    {
      Model: 'Toyota',
      Mark: 'Camry',
      Year: 2024,
      Doors: 4,
      AC: true,
      Transmission: 'Automatic',
      Fuel: 'Hybrid',
      Price: 0
    }
  ];
}
