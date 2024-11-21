import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const init = ()=>{
  @Component({
    selector: 'mf1',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  class AppComponent {
    title = 'angular-micro-esbuild-poc';
  }

  return AppComponent
}
