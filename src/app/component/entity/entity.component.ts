import { EntityService } from '../../service/entity/entity.service';
import { Observable } from 'rxjs';
import { Entity } from '../../model/entity';


export abstract class EntityComponent<T extends Entity> {

  constructor(private entityService: EntityService<T>) {
  }

  save(entity: T) {
    this.entityService.add(entity).subscribe();
  }

  delete(id: number) {
    this.entityService.delete(id).subscribe();
  }

  update(entity: T) {
    this.entityService.update(entity).subscribe();
  }

  get(id: number): Observable<T> {
    return this.entityService.get(id);
  }

  getAll(params?): Observable<T[]> {
    return this.entityService.getAll(params);
  }
}


