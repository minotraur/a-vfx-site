import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomePageRoutingModule, SlickCarouselModule],
})
export class HomePageModule {}
