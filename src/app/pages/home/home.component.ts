import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetDataService, Project } from './get-data.service';

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
}
