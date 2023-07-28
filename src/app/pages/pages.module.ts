import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    WorksComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, BrowserAnimationsModule],
  exports: [AboutComponent, ContactComponent, HomeComponent, WorksComponent],
})
export class PagesModule {}
