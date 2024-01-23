import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarColor, CarModel } from '../../models/car-model';
import { CarConfiguration, CarOption } from '../../models/car-option';


@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent {

  readonly thousand = 1000;
  selectedCarModel: CarModel;
  selectedCarColor: CarColor;
  selectedCarConfig: CarConfiguration;
  selectedCarOption: CarOption;
  totalCost: number = 0;

  constructor() {
    this.selectedCarModel = JSON.parse(localStorage.getItem('model') as string);
    this.selectedCarColor = JSON.parse(localStorage.getItem('color') as string);
    this.selectedCarConfig = JSON.parse(localStorage.getItem('config') as string);
    this.selectedCarOption = JSON.parse(localStorage.getItem('option') as string);
    this.totalCost = this.selectedCarColor?.price + this.selectedCarConfig?.price 
    + (this.selectedCarOption?.towHitch ? 1000 : 0) + (this.selectedCarOption?.yoke ? 1000 : 0); 
  }
}
