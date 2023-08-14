import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'src/js/ScrollSmoother.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'A-VFX';

  smoother: any;

  @ViewChild('animObject', { static: true })
  private animationObject!: ElementRef<HTMLDivElement>;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.initialScrollAnimations();
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
    this.smoother = ScrollSmoother.create({
      content: '#smooth-content',
      wrapper: 'app-root',
      smooth: 1.1,
      effects: true,
    });
  }

  initialScrollAnimations(): void {
    gsap.from(this.animationObject?.nativeElement, {
      duration: 3,
      opacity: 0,
      stagger: 0.5,
      delay: 0.3,
    });
  }
}
