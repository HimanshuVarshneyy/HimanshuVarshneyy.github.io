import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepThreeComponent } from './step-three.component';
import { CarService } from '../../services/car.service';
import { HttpClientModule } from '@angular/common/http';

describe('StepThreeComponent', () => {
  let component: StepThreeComponent;
  let fixture: ComponentFixture<StepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepThreeComponent, HttpClientModule],
      providers: [CarService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
