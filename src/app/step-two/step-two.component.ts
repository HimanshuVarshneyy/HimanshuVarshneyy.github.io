import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarModel } from '../../models/car-model';
import { CarConfiguration, CarOption } from '../../models/car-option';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {
  
  selectedCarModel!: CarModel;
  carOption?: CarOption;
  selectedConfig?: CarConfiguration;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.selectedCarModel = JSON.parse(localStorage.getItem('model') as string);
    this.selectedConfig = JSON.parse(localStorage.getItem('config') as string) || undefined;
    this.carService.getCarOptions(this.selectedCarModel?.code).subscribe(result => {
      this.carOption = JSON.parse(localStorage.getItem('option') as string) || result;
    });
  }

  enableNextStep() {
    localStorage.setItem("config", JSON.stringify(this.selectedConfig));
    localStorage.setItem("option", JSON.stringify(this.carOption));
  }
}
