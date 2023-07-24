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
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import ScrollSmoother from 'src/js/ScrollSmoother.min.js';

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  TextPlugin,
  ScrollSmoother
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'A-VFX';

  smoother: any;

  @ViewChild('animObject', { static: true })
  private animationObject!: ElementRef<HTMLDivElement>;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.initialAnimations();
    this.initialScrollAnimations();
  }

  ngAfterViewInit() {
    this.smoother = ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 2,
    });

    ScrollTrigger.addEventListener('refresh', () => {
      console.log('initial body inline styles:', document.body.style.cssText);
    });
    setTimeout(() => {
      this.smoother.effects('[data-speed], [data-lag]');
      console.log(
        'after creating effects, body inline styles:',
        document.body.style.cssText
      );
      ScrollTrigger.refresh();
    }, 50);
  }

  initialAnimations(): void {}

  initialScrollAnimations(): void {
    gsap.from(this.animationObject?.nativeElement, {
      duration: 3,
      opacity: 0,
      stagger: 0.5,
      delay: 0.3,
    });
  }
}
