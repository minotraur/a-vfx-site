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
import Scrollbar from 'smooth-scrollbar';

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

    // const scroller = document.querySelector('app-root') as HTMLElement;

    // const bodyScrollBar = Scrollbar.init(scroller, {
    //   damping: 0.1,
    //   delegateTo: document,
    //   alwaysShowTracks: true,
    // });

    // ScrollTrigger.scrollerProxy('.scroller', {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       bodyScrollBar.scrollTop = value!;
    //     }
    //     return bodyScrollBar.scrollTop;
    //   },
    // });

    // bodyScrollBar.addListener(ScrollTrigger.update);

    // ScrollTrigger.defaults({ scroller: scroller });
    // this.smoother = ScrollSmoother.create({
    //   content: '#smooth-content',
    //   wrapper: 'app-root',
    //   smooth: 1.1,
    //   effects: true,
    // });
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
