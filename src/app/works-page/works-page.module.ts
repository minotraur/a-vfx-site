import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksPageRoutingModule } from './works-page-routing.module';
import { WorksComponent } from './works/works.component';


@NgModule({
  declarations: [
    WorksComponent
  ],
  imports: [
    CommonModule,
    WorksPageRoutingModule
  ]
})
export class WorksPageModule { }
