import { Injectable } from '@nestjs/common';
import { Project } from '../dto';

@Injectable()
export class ProjectService {
  /**
   * @description get projects
   * @param
   * @returns projects
   */
  getProjects(): Project[] {
    return [
      {
        id: '1',
        name: 'Project 1',
      },
      {
        id: '2',
        name: 'Project 2',
      },
    ];
  }
}
