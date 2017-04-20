import {Resolve,ActivatedRouteSnapshot} from '@angular/router'
import {Injectable} from '@angular/core'
import {EventService} from './shared/event.service'

@Injectable()
export class EventResolverService implements Resolve<any>{

    constructor(private eventService:EventService){}
    resolve(route:ActivatedRouteSnapshot){
        return this.eventService.getEvent(route.params['id']);
    }
}