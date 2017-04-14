import {Component, OnInit} from '@angular/core'

import {EventService} from './shared/event.service'
import {ToastrService} from './common/toastr.service'

import {ActivatedRoute} from '@angular/router'

@Component({
    template:`
    <div>
    <h1>Upcoming Events</h1>
    <hr />
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail [event]=event (click)="handleThumbnailClick(event.name)"></event-thumbnail>
        </div>
    </div>
    </div>
    `
})
export class EventsListComponent implements OnInit{
  events:any;
  
  constructor(private eventService:EventService, private toastrService:ToastrService, private activatedRoute:ActivatedRoute){ }

  ngOnInit(){
    this.events = this.activatedRoute.snapshot.data['events'];
  }

  handleThumbnailClick(eventName){
        this.toastrService.success(eventName);
    }
}