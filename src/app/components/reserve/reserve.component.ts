import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(() => {
      const _new = new Date
      this.date_minValue('PickDate', this.get_YYYY_MM_DD(_new))
      this.date_minValue('DropDate', this.get_YYYY_MM_DD(_new))
    })
  }
  ngOnInit(): void {

  }
  isVisible = false
  reserver_form = {
    different_return: false,
    dates: {
      date_min: new Date,
      time_min: new Date,
      time_max: new Date
    }

  }
  show(){
    this.isVisible = !this.isVisible
    console.log(this.isVisible)
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
