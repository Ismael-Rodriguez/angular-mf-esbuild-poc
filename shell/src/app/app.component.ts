import {Component, inject, NgZone} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { initFederation } from '@angular-architects/native-federation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shell';
  private ngzone = inject(NgZone)

  constructor(){
    // setTimeout(() => {
    //   const mf1placeholder = document.getElementById('mf1placeholder')
    //   mf1placeholder?.remove()
    //   this.renderMf1()
    // }, 5000);

  }

  renderMf1(){
    const mf1placeholder = document.getElementById('mf1placeholder')
    mf1placeholder?.remove()

    initFederation({
	    "mfe1": "http://localhost:4201/remoteEntry.json"
    })
      .catch(err => console.error(err))
      .then(_ => {
        loadRemoteModule('mfe1', './Component').then((m) => {
          const ele = document.createElement(m.mf.meta.elementName)
          const parent = document.getElementById('mfzone')
          parent?.appendChild(ele)
          this.ngzone.runOutsideAngular(m.mf.bootstrap)
        })
      })
      .catch(err => console.error(err));
  }
}
