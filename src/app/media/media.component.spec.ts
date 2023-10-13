import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ProxySizeService } from '../service/proxy-size.service';
import { DevHoursService } from '../service/dev-hours.service';


describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let opcion1: ProxySizeService;
  let opcion2: DevHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    opcion1 = TestBed.inject(ProxySizeService);
    opcion2 = TestBed.inject(DevHoursService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return mean = 550.6 with array 1',()=> {
    let array1=[160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(opcion1, 'getArray').and.returnValue(of(array1));
    component.ngOnInit();
    expect(component.media(component.a)).toEqual(550.6);
  });

  it('Should return mean = 60.32 with array 2',() => {
    let array2=[15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(opcion2, 'getArray').and.returnValue(of(array2));
    component.ngOnInit();
    expect(component.media(component.b)).toBe(60.32);
  });
});
