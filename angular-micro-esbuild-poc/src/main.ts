import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initFederation } from '@angular-architects/native-federation';

const bootstrap = ()=>{
  initFederation()
    .catch(err => console.error(err))
    .then(_ => {
      bootstrapApplication(AppComponent, appConfig)
        .catch((err) => console.error(err));
    })
    .catch(err => console.error(err));
}

const meta = {
  elementName: 'mf1'
}

export const mf = {
  meta,
  bootstrap
}
