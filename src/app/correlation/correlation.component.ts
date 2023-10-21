import { Component } from '@angular/core';
import { Data3aService } from '../service/data3a.service';
import { Calcular } from '../commons/commons';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent {
  constructor(private service: Data3aService){}

  data={
    x:[],
    y:[]
  }

  getDataTest1(){
    this.service.getTest1().subscribe(response=>{
      this.data.x=response.proxy_size;
      this.data.y=response.actual_add;
    })
  }

  getDataTest2(){
    this.service.getTest2().subscribe(response=>{
      this.data.x=response.proxy_size;
      this.data.y=response.actual_develop;
    })
  }

  getDataTest3(){
    this.service.getTest3().subscribe(response=>{
      this.data.x=response.plan_added;
      this.data.y=response.actual_added;
    })
  }

  getDataTest4(){
    this.service.getTest4().subscribe(response=>{
      this.data.x=response.plan_added
      this.data.y=response.actual_develop;
    })
  }


  calcularR():number{
    let n=this.data.x.length;
    let sumaXY=Calcular.sumarXY(this.data.x, this.data.y);
    let sumaX=Calcular.sumarX(this.data.x);
    let sumaY=Calcular.sumarY(this.data.y);
    let sumaX2=Calcular.sumarX2(this.data.x);
    let sumaY2=Calcular.sumarY2(this.data.y);

    return ((n*sumaXY)-(sumaX*sumaY))/Math.sqrt(((n*sumaX2)-(sumaX*sumaX))*((n*sumaY2)-(sumaY*sumaY)));
  }

  calcularR2():number{
    let r=this.calcularR();
    return r*r;
  }
}
