import { EntityService } from '../entity/entity.service';
import { SystemMessageService } from '../system-message.service';
import { tap } from 'rxjs/operators';

export abstract class EntityProxyService<T> {

  constructor(private entityService: EntityService<T>, private systemMessageService: SystemMessageService) { }
  deleteEntity(id: number) {
    return this.entityService.delete(id).pipe(tap(() => this.systemMessageService.show('Blocked')));
  }
  addEntity(entity: T) {
    this.entityService.add(entity).subscribe(() => this.systemMessageService.show('Added'));
  }
  updateEntity(entity: T) {
    this.entityService.update(entity).subscribe(() => this.systemMessageService.show('Updated'));
  }
}
