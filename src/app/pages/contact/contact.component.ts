import { Component, HostBinding } from '@angular/core';
import { routingAnimation } from 'src/app/animations/routing-animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [routingAnimation],
})
export class ContactComponent {
  @HostBinding('@routingAnimation') private routing: any;

}
