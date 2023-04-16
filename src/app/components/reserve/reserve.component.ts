import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/Models/car';
import { LocalService } from 'src/app/Services/LocalService';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit, AfterViewInit{

  constructor(private service: LocalService){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const _new = new Date
      this.date_minValue('PickDate', this.get_YYYY_MM_DD(_new))
      this.date_minValue('DropDate', this.get_YYYY_MM_DD(_new))
    })
  }
  ngOnInit(): void {
    this.cars =this.service.getCars()
  }
  cars: Vehicle[];
  Show_dropOff = false
  reserver_form = {
    different_return: false,
    dates: {
      date_min: new Date,
      time_min: new Date,
      time_max: new Date
    },
    selecting_car: false
  }
  


  show_dropOff(){
    this.Show_dropOff = !this.Show_dropOff
  }
  select_car(){
    this.reserver_form.selecting_car = !this.reserver_form.selecting_car
  }
  date_minValue(element_id: string, new_value: string){
    const element = <HTMLInputElement>document.getElementById(element_id);
    element.min = new_value;
    element.value = new_value;
  }
  get_YYYY_MM_DD(date: Date){
    return `${date.getFullYear()}-${("0" +(date.getMonth() +1)).slice(-2)}-${date.getDate()}`
  }

}
