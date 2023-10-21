import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRegressionComponent } from './linear-regression.component';
import { Data3aService } from '../service/data3a.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MediaComponent } from '../media/media.component';
import { of } from 'rxjs';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let service: Data3aService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent],
      imports: [HttpClientTestingModule],
      providers: [MediaComponent]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(Data3aService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return B0=-22.55 with the dataset Data_Test1',()=>{
    let data={
      "proxy_size":[130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_add":[186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest1').and.returnValue(of(data));
    component.getDataTest1();
    expect(component.calcularB0()).toBeCloseTo(-22.55, 2);
  })

  it('Should return B1=1.7279 with the dataset Data_Test1', ()=>{
    let data={
      "proxy_size":[130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_add":[186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest1').and.returnValue(of(data));
    component.getDataTest1();
    expect(component.calcularB1()).toBeCloseTo(1.7279, 4);
  })

  it('Should return yk=644.429 with the dataset Data_Test1 if x=386', ()=>{
    let data={
      "proxy_size":[130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_add":[186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest1').and.returnValue(of(data));
    component.getDataTest1();
    expect(component.calcularY(386)).toBeCloseTo(644.429, 3);
  })


  it('Should return B0=-4.039 with the dataset Data_Test2', ()=>{
    let data={
      "proxy_size": [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_develop": [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest2').and.returnValue(of(data));
    component.getDataTest2();
    expect(component.calcularB0()).toBeCloseTo(-4.039, 3);
  })

  it('Should return B1=0.1681 with the dataset Data_Test2', ()=>{
    let data={
      "proxy_size": [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_develop": [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest2').and.returnValue(of(data));
    component.getDataTest2();
    expect(component.calcularB1()).toBeCloseTo(0.1681, 4);
  })

  it('Should return yk=60.858 with the dataset Data_Test2 if x=386',()=>{
    let data={
      "proxy_size": [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      "actual_develop": [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest2').and.returnValue(of(data));
    component.getDataTest2();
    expect(component.calcularY(386)).toBeCloseTo(60.858, 3);
  })


  it('Should return B0=-23.92 with the dataset Data_Test3', ()=>{
    let data={
      "plan_added": [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_added": [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest3').and.returnValue(of(data));
    component.getDataTest3();
    expect(component.calcularB0()).toBeCloseTo(-23.92);
  })

  it('Should return B1=1.43097 with the dataset Data_Test3', ()=>{
    let data={
      "plan_added": [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_added": [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest3').and.returnValue(of(data));
    component.getDataTest3();
    expect(component.calcularB1()).toBeCloseTo(1.43097, 5);
  })

  it('Should return yk=528.4294 with the dataset Data_Test3 if x=386', ()=>{
    let data={
      "plan_added": [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_added": [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    }
    spyOn(service, 'getTest3').and.returnValue(of(data));
    component.getDataTest3();
    expect(component.calcularY(386)).toBeCloseTo(528.4294, 4);
  })


  it('Should return B0=-4.604 with the dataset Data_Test4', ()=>{
    let data={
      "plan_added": [ 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_develop": [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest4').and.returnValue(of(data));
    component.getDataTest4();
    expect(component.calcularB0()).toBeCloseTo(-4.604,3);
  })

  it('Should return B1=0.1402 with the dataset Data_Test4', ()=>{
    let data={
      "plan_added": [ 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_develop": [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest4').and.returnValue(of(data));
    component.getDataTest4();
    expect(component.calcularB1()).toBeCloseTo(0.1402, 4);
  })

  it('Should return yk=49.4994 with the dataset Data_Test4 if x=386', ()=>{
    let data={
      "plan_added": [ 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      "actual_develop": [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    }
    spyOn(service, 'getTest4').and.returnValue(of(data));
    component.getDataTest4();
    expect(component.calcularY(386)).toBeCloseTo(49.4994, 4);
  })

});
