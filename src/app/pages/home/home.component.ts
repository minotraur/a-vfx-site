import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetDataService, Project } from './get-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  projects!: Project[];

  constructor(private projectService: GetDataService) {}

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

    const itemsL = gsap.utils.toArray('.projects-left .project__card');

    itemsL.forEach((item: any) =>
      gsap.fromTo(
        item,
        { x: -50, opacity: 0 },
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
        { x: 80, opacity: 0 },
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
