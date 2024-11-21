import {ApplicationConfig, provideZoneChangeDetection, NgZone} from '@angular/core'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })]
};
