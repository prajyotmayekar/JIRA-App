import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './services/project.service';
import { Project } from './dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get()
  getProject(): Project[] {
    return this.projectService.getProjects();
  }
}
