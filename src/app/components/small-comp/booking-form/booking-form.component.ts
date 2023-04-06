import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Models/car';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  ngOnInit(): void {
  }
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
  available_citys: string[] = [
    'Santo Domingo', 'Barahona', 'Santiago', 'Puerto Plata', 'Monte Cristi', 'Punta Cana'
  ]
  today_date: Date = new Date;
  drop_date: Date = new Date;
  min_drop(){
    const pickup_date = <HTMLInputElement>document.getElementById('Pick-up')
    const Dropof_date = <HTMLInputElement>document.getElementById('Drop-of')
    
    console.log(pickup_date.value)
    let _date: Date = new Date(pickup_date.value)
    Dropof_date.setAttribute("min", 
    `${_date.getFullYear()}
    -${("0" + (_date.getMonth() + 1)).slice(-2)}
    -${("0" + (_date.getDate() + 2)).slice(-2)}
    `)
  }
}
