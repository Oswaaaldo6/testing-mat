import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationComponent } from './correlation.component';
import { HttpClientModule } from '@angular/common/http';
import { Data3aService } from '../service/data3a.service';
import { of } from 'rxjs';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let service: Data3aService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      imports:[HttpClientModule],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(Data3aService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9545 with the dataset Data_Test1',()=>{
    let data={
      "proxy_size":[130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_add":[186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest1').and.returnValue(of(data));
    component.getDataTest1();
    expect(component.calcularR()).toBeCloseTo(0.9545, 4);
  })

  it('Should return squar r=0.9111 with the dataset Data_Test1', ()=>{
    let data={
      "proxy_size":[130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_add":[186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest1').and.returnValue(of(data));
    component.getDataTest1();
    expect(component.calcularR2()).toBeCloseTo(0.9111, 4);
  })


  it('Should return r=0.9333 with the dataset Data_Test2', ()=>{
    let data={
      "proxy_size": [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_develop": [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest2').and.returnValue(of(data));
    component.getDataTest2();
    expect(component.calcularR()).toBeCloseTo(0.9333, 4);
  })

  it('Should return squar r=0.8711 with the dataset Data_Test2', ()=>{
    const esperado={
      "proxy_size": [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_develop": [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest2').and.returnValue(of(esperado));
    component.getDataTest2();
    
    expect(component.calcularR2()).toBeCloseTo(0.8711, 4);
  })


  it('Should return r=0.9631 with the dataset Data_Test3', ()=>{
    let data={
      "plan_added": [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_added": [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest3').and.returnValue(of(data));
    component.getDataTest3();
    
    expect(component.calcularR()).toBeCloseTo(0.9631, 4);
  })

  it('Should return squar r=0.9276 with the dataset Data_Test3', ()=>{
    let data={
      "plan_added": [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_added": [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest3').and.returnValue(of(data));
    component.getDataTest3();
    
    expect(component.calcularR2()).toBeCloseTo(0.9276, 4);
  })


  it('Should return r=0.9480 with the dataset Data_Test4', ()=>{
    let data={
      "plan_added": [ 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_develop": [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest4').and.returnValue(of(data));
    component.getDataTest4();
    
    expect(component.calcularR()).toBeCloseTo(0.9480,4);
  })

  it('Should return squar r=0.8988 with the dataset Data_Test4', ()=>{
    let data={
      "plan_added": [ 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_develop": [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest4').and.returnValue(of(data));
    component.getDataTest4();
    
    expect(component.calcularR2()).toBeCloseTo(0.8988, 4);
  })

});
