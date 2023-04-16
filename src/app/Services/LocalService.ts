import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from '../Models/car';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  cars: Vehicle[] = [
    {
      Brand: 'Nissan',
      Model: 'Sentra',
      type: 'Car',
      Year: 2017,
      Doors: 4,
      AC: true,
      Transmission: '',
      Fuel: '',
      Price: 0,
    },
    {
      Brand: 'Chevrolet',
      Model: 'Spark',
      type: 'Car',
      Year: 2020,
      Doors: 4,
      AC: true,
      Transmission: '',
      Fuel: '',
      Price: 0,
    },
    {
      Brand: 'Hyundai',
      Model: 'Accent',
      type: 'Car',
      Year: 2017,
      Doors: 4,
      AC: true,
      Transmission: '',
      Fuel: '',
      Price: 0,
    },
    {
      Brand: 'Kia',
      Model: 'Rio',
      type: 'Car',
      Year: 2024,
      Doors: 4,
      AC: true,
      Transmission: '',
      Fuel: '',
      Price: 0,
    },
    {
      Brand: 'Kia',
      Model: 'Picanto',
      type: 'Car',
      Year: 2024,
      Doors: 4,
      AC: true,
      Transmission: '',
      Fuel: '',
      Price: 0,
    },
    {
      Brand: 'Toyota',
      Model: 'Camry',
      type: 'Car',
      Year: 2024,
      Doors: 4,
      AC: true,
      Transmission: 'Automatic',
      Fuel: 'Hybrid',
      Price: 0,
    },
    {
      Brand: 'Toyota',
      Model: 'RAV4',
      type: 'SUV',
      Year: 2020,
      Doors: 4,
      AC: true,
      Transmission: 'Manual',
      Fuel: 'Diesel',
      Price: 0,
    },
    {
      Brand: 'Chevrolet',
      Model: 'Silverado',
      type: 'Truck',
      Year: 2022,
      Doors: 4,
      AC: true,
      Transmission: 'Manual',
      Fuel: 'Diesel',
      Price: 0,
    },
    {
      Brand: 'Ford',
      Model: 'F150',
      type: 'Truck',
      Year: 2023,
      Doors: 4,
      AC: true,
      Transmission: 'Automatic',
      Fuel: 'Gasoline',
      Price: 0,
    },
    {
      Brand: 'Ram',
      Model: '1500',
      type: 'Truck',
      Year: 2023,
      Doors: 4,
      AC: true,
      Transmission: 'Automatic',
      Fuel: 'Gasoline',
      Price: 0,
    }
  ]

  cities: string[] = [
    'Santo Domingo', 'Barahona', 'Santiago', 'Puerto Plata', 'Monte Cristi', 'Punta Cana'
  ]
  
  getCars(){
    return this.cars
  }
  getCities(){
    return this.cities
  }
  
}
