import { Component, HostBinding } from '@angular/core';
import { routingAnimation } from 'src/app/animations/routing-animation';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [routingAnimation],
})
export class WorksComponent {
  @HostBinding('@routingAnimation') private routing: any;
}
