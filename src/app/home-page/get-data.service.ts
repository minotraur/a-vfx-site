import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  more_text: string;
  image: string;
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Союз',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/souz.jpg',
  },
  {
    id: 2,
    name: 'Robo',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/robo.jpg',
  },
  {
    id: 3,
    name: '2.0',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/2.jpg',
  },
  {
    id: 4,
    name: 'Elki 2',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/elki.jpg',
  },
  {
    id: 5,
    name: 'Wonder world',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/wonder.jpg',
  },
  {
    id: 6,
    name: 'Para from future',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/para.jpg',
  },
  {
    id: 7,
    name: 'Steel rain',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/steel.jpg',
  },
  {
    id: 8,
    name: 'Masha and the Bear',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/masha.jpg',
  },
  {
    id: 9,
    name: 'Legend №17',
    description: 'Описание',
    more_text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim temporibus laudantium, esse est officiis optio consequuntur sit suscipit dicta ipsa rerum a accusamus nihil pariatur fuga repudiandae! Incidunt, cum.',
    image: 'assets/imgs/legend17.jpg',
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
