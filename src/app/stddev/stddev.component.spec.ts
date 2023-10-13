import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MediaComponent } from '../media/media.component';
import { ProxySizeService } from '../service/proxy-size.service';
import { DevHoursService } from '../service/dev-hours.service';


describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let opcion1: ProxySizeService;
  let opcion2: DevHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent],
      imports: [HttpClientTestingModule],
      providers: [MediaComponent]
    });
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    opcion1 = TestBed.inject(ProxySizeService);
    opcion2 = TestBed.inject(DevHoursService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return stddev=572.03 with the array 1', ()=>{
    let array1=[160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(opcion1, 'getArray').and.returnValue(of(array1));
    component.ngOnInit()
    expect(component.desviacionStandar(component.a)).toBe(572.03);
  })

  it('Should return stddev=62.26 with the array 2', ()=>{
    let array2=[15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(opcion2, 'getArray').and.returnValue(of(array2));
    component.ngOnInit();
    expect(component.desviacionStandar(component.b)).toBe(62.26);
  })
});
