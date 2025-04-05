import { Injectable } from '@nestjs/common';
import { Response as GetProjectResponse } from '../dto/project/GET';
import { Request as AddProjectRequest } from '../dto/project/POST';

@Injectable()
export class ProjectService {
  /**
   * @description get projects
   * @param
   * @returns projects
   */
  getProjects(): GetProjectResponse {
    return {
      projects: [
        {
          id: '1',
          name: 'Project 1',
        },
        {
          id: '2',
          name: 'Project 2',
        },
      ],
    };
  }

  /**
   * @description Add project
   * @param
   * @returns project
   */
  addProject(project: AddProjectRequest): number {
    console.log(project);
    return 1;
  }
}
