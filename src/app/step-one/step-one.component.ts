import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarColor, CarModel } from '../../models/car-model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent implements OnInit {

  selectedCarModel?: CarModel;
  selectedCarColor?: CarColor;
  carModels: CarModel[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.setSelectedCarModelAndColor();
    this.setCarModels();
  }

  enableNextStep() {
    localStorage.setItem("model", JSON.stringify(this.selectedCarModel));
    localStorage.setItem("color", JSON.stringify(this.selectedCarColor));
  }

  reset() {
    this.selectedCarModel = undefined;
    this.selectedCarColor = undefined;
    localStorage.clear();
  }

  private setSelectedCarModelAndColor() {
    this.selectedCarModel = JSON.parse(localStorage.getItem('model') as string) as CarModel || undefined;
    this.selectedCarColor = JSON.parse(localStorage.getItem('color') as string) as CarColor || undefined;
  }

  private setCarModels() {
    this.carService.getCarModels().subscribe(carModels => {
      this.carModels = carModels;
    });
  }
}
