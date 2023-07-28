import { Component, HostBinding } from '@angular/core';
import { routingAnimation } from 'src/app/animations/routing-animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routingAnimation],
})
export class AboutComponent {
  @HostBinding('@routingAnimation') private routing: any;
}
