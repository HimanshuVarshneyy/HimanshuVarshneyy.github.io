import { Routes } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { stepTwoGuard } from '../guards/step-two.guard';
import { stepThreeGuard } from '../guards/step-three.guard';

export const routes: Routes = [
    { path: 'step-one', component: StepOneComponent },
    { path: 'step-two', component: StepTwoComponent, canActivate: [stepTwoGuard] },
    { path: 'step-three', component: StepThreeComponent, canActivate: [stepThreeGuard] },
    { path: '**', redirectTo: '/step-one' },
];
