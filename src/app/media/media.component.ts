import { Component, OnInit } from '@angular/core';
import { ProxySizeService } from '../service/proxy-size.service';
import { DevHoursService } from '../service/dev-hours.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit{

  a=[0];
  b=[0];

  constructor(private servicio1:ProxySizeService, private servicio2:DevHoursService){};

  ngOnInit(): void {
    this.servicio1.getArray().subscribe(data=>{
      this.a=data;
    })
    this.servicio2.getArray().subscribe(data=>{
      this.b=data;
    })
  }

  media(array:number[]):number{
    var suma=0;
    for(var i=0; i<array.length; i++){
      suma+=array[i];
    }
    var promedio=suma/array.length
    return Number((promedio).toFixed(2));
  }
}
