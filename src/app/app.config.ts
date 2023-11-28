import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideFastSVG} from '@push-based/ngx-fast-svg';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),]
};
