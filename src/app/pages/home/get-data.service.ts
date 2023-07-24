import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string; // You can use Date type if needed
  endDate: string; // You can use Date type if needed
  status: string; // 'Planned', 'In Progress', 'Completed', etc.
}

// mock-projects.ts

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Project A',
    description: 'This is the description of Project A',
    startDate: '2023-01-01',
    endDate: '2023-03-31',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Project B',
    description: 'This is the description of Project B',
    startDate: '2023-02-15',
    endDate: '2023-06-30',
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'Project C',
    description: 'This is the description of Project C',
    startDate: '2023-04-10',
    endDate: '2023-08-31',
    status: 'Planned',
  },
];

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  getProjects(): Project[] {
    // In a real application, you might fetch data from a backend here,
    // but for the mock data, we'll just return the predefined array.
    return MOCK_PROJECTS;
  }
}
