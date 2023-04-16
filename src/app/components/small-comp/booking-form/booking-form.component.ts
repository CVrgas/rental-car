import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/Models/car';
import { LocalService } from 'src/app/Services/LocalService';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  constructor(private service: LocalService){}
  ngOnInit(): void {
    this.cars = this.service.getCars()
    this.cities = this.service.getCities()
  }
  cars: Vehicle[]
  cities: string[];
  today_date: Date = new Date;
  drop_date: Date = new Date;

  min_drop(){
    const pickup_date = <HTMLInputElement>document.getElementById('Pick-up')
    const Dropof_date = <HTMLInputElement>document.getElementById('Drop-of')
    
    console.log(pickup_date.value)
    let _date: Date = new Date(pickup_date.value)
    Dropof_date.setAttribute("min", 
    `${_date.getFullYear()}-${("0" + (_date.getMonth() + 1)).slice(-2)}-${("0" + (_date.getDate() + 2)).slice(-2)}
    `)
  }
}
