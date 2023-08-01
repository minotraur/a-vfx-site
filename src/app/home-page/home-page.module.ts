import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomePageRoutingModule, SwiperModule],
})
export class HomePageModule {}
