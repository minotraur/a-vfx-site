import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { routingAnimation } from 'src/app/animations/routing-animation';
import { GetDataService, Project } from 'src/app/works-page/get-data.service';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  videos = [
    // { url: 'assets/videos/1.mp4', text: 'TEXT 1' },
    { url: 'assets/videos/2.mp4', text: 'TEXT 2' },
    { url: 'assets/videos/3.mp4', text: 'TEXT 3' },
    { url: 'assets/videos/4.mp4', text: 'TEXT 4' },
    { url: 'assets/videos/5.mp4', text: 'TEXT 5' },
    { url: 'assets/videos/6.mp4', text: 'TEXT 6' },
    // Добавьте дополнительные видео, указав их URL
  ];

  slickCarouselConfig = {
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fullscreen: true,
  };

  @HostBinding('@routingAnimation') private routing: any;

  projects!: Project[];

  @HostBinding('style.--mouseX') mouseX = '0';
  @HostBinding('style.--mouseY') mouseY = '0';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = `${event.clientX}px`;
    this.mouseY = `${event.clientY}px`;
  }

  constructor(
    private projectService: GetDataService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    // Call the getProjects() method of the ProjectService to fetch the data.
    this.projects = this.projectService.getProjects();
  }

  ngAfterViewInit() {
    gsap.fromTo(
      '.header .slogan',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.slogan',
          start: '100',
          end: '820',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.works .works__h1',
      { x: 500, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        delay: 5,
        scrollTrigger: {
          trigger: '.works__h1',
          start: '-100',
          end: '1000',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.abilities .abilities__h',
      { x: 500, opacity: 0 },
      {
        opacity: 1,
        x: 120,
        delay: 5,
        scrollTrigger: {
          trigger: '.abilities__h',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.team .team__h',
      { x: 500, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.team__h',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.partners .partners__h',
      { x: 500, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.partners__h',
          scrub: true,
        },
      }
    );

    const itemsL = gsap.utils.toArray('.projects-left .project__card');

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

    const itemsR = gsap.utils.toArray('.projects-right .project__card');

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
  }
}
