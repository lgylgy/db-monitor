import { Injectable } from '@nestjs/common';
import { IRepository } from '@lgy/shared/repository';

@Injectable()
export class RepositoriesService {
    private repositories: IRepository[] = [
      {
        id: 'id1',
        name: 'name1',
        type: 'type1',
      },
      {
        id: 'id2',
        name: 'name2',
        type: 'type2',
      },
    ];

    getAll(): IRepository[] {
        return this.repositories;
    }

    get(id: string): IRepository {
        return this.repositories.find(repo => repo.id === id);
    }
}
