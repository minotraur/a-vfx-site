import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { GetDataService, Project } from './get-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
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
        scrollTrigger: {
          trigger: '.abilities__h',
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
