import { IRepository } from '@lgy/shared/repository';
import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { RepositoriesService } from './repositories.service';

@Controller('repositories')
export class RepositoriesController {
  constructor(private repositoriesService: RepositoriesService) {}

  @Get('')
  getAll(): IRepository[] {
    return this.repositoriesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IRepository {
    return this.repositoriesService.get(id);
  }
}