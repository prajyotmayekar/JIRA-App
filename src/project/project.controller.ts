/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectService } from './services/project.service';
import { Response as GetProjectResponse } from './dto/project/GET';
import { Request as AddProjectRequest } from './dto/project/POST';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get()
  getProject(): GetProjectResponse {
    return this.projectService.getProjects();
  }

  @Post()
  addProject(@Body() project: AddProjectRequest): number {
    return this.projectService.addProject(project);
  }
}
