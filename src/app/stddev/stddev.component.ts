import { Component, OnInit } from '@angular/core';
import { ProxySizeService } from '../service/proxy-size.service';
import { DevHoursService } from '../service/dev-hours.service';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit{
  a:any=[]
  b:any=[]

  constructor(private opcion1:ProxySizeService, private opcion2:DevHoursService, private componente:MediaComponent){};

  ngOnInit(): void {
    this.opcion1.getArray().subscribe(data=>{
      this.a=data;
    })
    this.opcion2.getArray().subscribe(data=>{
      this.b=data;
    })
  }

  desviacionStandar(numeros:[]){
    let promedio=this.componente.media(numeros);
    let acumulacion=0;
    for(let i=0 ; i<numeros.length; i++){
      acumulacion=acumulacion+Math.pow((numeros[i]-promedio),2);
    }
    return Number(Math.sqrt((acumulacion/(numeros.length-1))).toFixed(2))
  }

}
