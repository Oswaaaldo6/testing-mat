import { Component } from '@angular/core';
import { Data3aService } from '../service/data3a.service';
import { MediaComponent } from '../media/media.component';
import { Calcular } from '../commons/commons';
@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent {
  constructor(private service:Data3aService, private promedio:MediaComponent){}

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

  calcularB0():number{
    let promedioX=this.promedio.media(this.data.x);
    let promedioY=this.promedio.media(this.data.y);
    return promedioY-(this.calcularB1()*promedioX);
  }

  calcularB1():number{
    let sumaXY=Calcular.sumarXY(this.data.x, this.data.y);
    let promedioX=this.promedio.media(this.data.x);
    let promedioY=this.promedio.media(this.data.y);
    let sumaX2=Calcular.sumarX2(this.data.x);
    let n=this.data.x.length;
    return (sumaXY-(n*promedioX*promedioY))/(sumaX2-(n*promedioX*promedioX));
  }

  calcularY(x:number){
    return (this.calcularB1()*x)+this.calcularB0();
  }
}
