import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/Services/LocalService';
import { Vehicle } from 'src/app/Models/car';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit{
  constructor(private service: LocalService){}
  ngOnInit(): void {
    this.available_cars = this.service.getCars()
  }
  
  available_cars: Vehicle[]
}
