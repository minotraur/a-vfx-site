import {
  Component,
  HostBinding,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { GetDataService, Project } from 'src/app/home-page/get-data.service';
import { SwiperComponent } from 'swiper/angular';

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

  thumbs: any;

  constructor(
    private projectService: GetDataService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Call the getProjects() method of the ProjectService to fetch the data.
    this.projects = this.projectService.getProjects();
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.works .works__h1',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.works__h1',
          start: '-50',
          end: '820',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '.works .back__circle1',
      { x: -100, y: -200 },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: '.back__circle1',
          start: '-50',
          end: '820',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '.works .back__circle2',
      { x: 1000, y: 500 },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: '.back__circle1',
          start: '-50',
          end: '820',
          scrub: true,
        },
      }
    );
    //   // gsap.fromTo(
    //   //   '.works .works__h1',
    //   //   { x: 500, opacity: 0 },
    //   //   {
    //   //     opacity: 1,
    //   //     x: 0,
    //   //     delay: 5,
    //   //     scrollTrigger: {
    //   //       trigger: '.works__h1',
    //   //       start: '-100',
    //   //       end: '1000',
    //   //       scrub: true,
    //   //     },
    //   //   }
    //   // );
    //   // gsap.fromTo(
    //   //   '.abilities .abilities__h',
    //   //   { x: 500, opacity: 0 },
    //   //   {
    //   //     opacity: 1,
    //   //     x: 120,
    //   //     delay: 5,
    //   //     scrollTrigger: {
    //   //       trigger: '.abilities__h',
    //   //       scrub: true,
    //   //     },
    //   //   }
    //   // );
    //   // gsap.fromTo(
    //   //   '.team .team__h',
    //   //   { x: 500, opacity: 0 },
    //   //   {
    //   //     opacity: 1,
    //   //     x: 0,
    //   //     scrollTrigger: {
    //   //       trigger: '.team__h',
    //   //       scrub: true,
    //   //     },
    //   //   }
    //   // );
    //   // gsap.fromTo(
    //   //   '.partners .partners__h',
    //   //   { x: 500, opacity: 0 },
    //   //   {
    //   //     opacity: 1,
    //   //     x: 0,
    //   //     scrollTrigger: {
    //   //       trigger: '.partners__h',
    //   //       scrub: true,
    //   //     },
    //   //   }
    //   // );
    //   // const itemsL = gsap.utils.toArray('.projects-left .project__card');
    //   // itemsL.forEach((item: any) =>
    //   //   gsap.fromTo(
    //   //     item,
    //   //     { x: -120, opacity: 0 },
    //   //     {
    //   //       opacity: 1,
    //   //       x: 0,
    //   //       scrollTrigger: {
    //   //         trigger: item,
    //   //         scrub: true,
    //   //       },
    //   //     }
    //   //   )
    //   // );
    //   // const itemsR = gsap.utils.toArray('.projects-right .project__card');
    //   // itemsR.forEach((item: any) =>
    //   //   gsap.fromTo(
    //   //     item,
    //   //     { x: 120, opacity: 0 },
    //   //     {
    //   //       opacity: 1,
    //   //       x: 0,
    //   //       scrollTrigger: {
    //   //         trigger: item,
    //   //         scrub: true,
    //   //       },
    //   //     }
    //   //   )
    //   // );
  }

  ngOnDestroy(): void {}
}
