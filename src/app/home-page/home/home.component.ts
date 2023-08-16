import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { GetDataService, Project } from 'src/app/home-page/get-data.service';
import { SwiperComponent } from 'swiper/angular';
import { Draggable } from 'gsap/all'; // Обратите внимание на "all"

import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade,
} from 'swiper';
import { Observable } from 'rxjs';
import Scrollbar from 'smooth-scrollbar';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade,
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding('@routingAnimation') private routing: any;

  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  videos = [
    // { url: 'assets/videos/1.mp4', text: 'TEXT 1' },
    { url: 'assets/videos/3.mp4', text: 'Черновик', link: '' },
    { url: 'assets/videos/5.mp4', text: 'Квакерсы', link: '' },
    { url: 'assets/videos/6.mp4', text: 'Кровавый хоккей', link: '' },
    // Добавьте дополнительные видео, указав их URL
  ];

  projects!: Project[];
  works!: Project[];

  thumbs: any;

  constructor(
    private projectService: GetDataService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Call the getProjects() method of the ProjectService to fetch the data.
    this.projects = this.projectService.getProjects();

    this.works = this.projectService.getProjects();
  }

  @ViewChild('draggableItem', { static: true }) draggableItemRef!: ElementRef;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    if (ScrollTrigger.isTouch !== 1) {
      const cases = gsap.utils.toArray('.section .cases .case-main');
      cases.forEach((item: any) =>
        gsap.fromTo(
          item,
          { opacity: 1 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              scrub: true,
            },
          }
        )
      );

      gsap.fromTo(
        '.work .work__h',
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '.work__h',
            scrub: true,
            markers: true,
          },
        }
      );

      gsap.fromTo(
        '.team .team__h',
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '.team__h',
            scrub: true,
          },
        }
      );
    }
  }

  ngOnDestroy(): void {}
}
