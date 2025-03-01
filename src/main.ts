import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register as registerSwiperElements } from 'swiper/element/bundle';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';

registerSwiperElements()
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
