import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { init } from './app/app.component';
import { initFederation } from '@angular-architects/native-federation';
import { NgZone } from '@angular/core'


export const bootstrap = ()=>{
  initFederation()
    .catch(err => console.error(err))
    .then(_ => {
      const ele = document.createElement('mf1')
      document.body.appendChild(ele)
      const AppComponent = init()
      bootstrapApplication(AppComponent, appConfig)
        .catch((err) => console.error(err));
    })
    .catch(err => console.error(err));
}


// bootstrap()
