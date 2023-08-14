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
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade,
} from 'swiper';
import { Observable } from 'rxjs';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
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
      gsap.fromTo(
        '.work .work__h',
        { opacity: 0, x: 1000 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.work__h',
            start: '-50',
            end: '820',
            scrub: true,
          },
        }
      );

      const itemsL = gsap.utils.toArray('.left-content .work__card');
      itemsL.forEach((item: any) =>
        gsap.fromTo(
          item,
          { x: -120, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              scrub: true,
            },
          }
        )
      );
      const itemsR = gsap.utils.toArray('.right-content .work__card');
      itemsR.forEach((item: any) =>
        gsap.fromTo(
          item,
          { x: 120, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              scrub: true,
            },
          }
        )
      );
      gsap.fromTo(
        '.team .team__h',
        { opacity: 0, x: 1000 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.team__h',
            scrub: true,
          },
        }
      );

      Draggable.create(this.draggableItemRef.nativeElement, {
        type: 'x,y',
        edgeResistance: 0.65,
        bounds: '.partners',
        onDragStart: () => {
          // Действия при начале перетаскивания
        },
        onDrag: () => {
          // Действия во время перетаскивания
        },
        onDragEnd: () => {
          // Действия при окончании перетаскивания
        },
      });

      gsap.fromTo(
        '.partners .partners__h',
        { opacity: 0, x: 1000 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.partners__h',
            scrub: true,
          },
        }
      );
    }
  }

  ngOnDestroy(): void {}
}
