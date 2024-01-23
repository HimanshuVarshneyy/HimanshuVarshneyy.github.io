import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor() {
    localStorage.clear();
  }
}
