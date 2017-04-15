import {Component,Input,OnInit} from '@angular/core'
import {EventService} from '../shared/event.service'
import {ActivatedRoute,Router} from '@angular/router'

import {IEvent,ISession} from '../shared/event.model'

@Component({
    templateUrl:'app/events/event-details/event-details.component.html',
    styles:[`
        .container{padding-left:20px;padding-right:20px}
        .event-image{height:100px}
        a{cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit{
    event:IEvent;
    addMode:boolean;
    filterBy:string='all';
    sortBy:string='votes'

    constructor(private eventService:EventService,private router:ActivatedRoute,private route:Router){}

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.router.snapshot.params['id']);
    }

    addSession(){
        this.addMode=true
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id));
        session.id=nextId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode=false
    }

    cancelNewSession(){
        this.addMode=false
    }
}