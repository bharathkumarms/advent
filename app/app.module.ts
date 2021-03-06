import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {AuthService} from './user/auth.service'

import {
    EventListResolver,
    EventsListComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventResolverService,
    EventService,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator,
    HelpdeskComponent
} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'

import {
    JQ_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './events/common/index';

import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component'

declare let toastr:Toastr;
declare let jQuery : Object;

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator,
        HelpdeskComponent
    ],
    bootstrap:[EventsAppComponent],
    providers:[
        EventService,
        {provide:TOASTR_TOKEN,useValue:toastr},
        {provide:JQ_TOKEN,useValue:jQuery},
        {provide:'canDeactivateCreateEvent', useValue:checkDirtyState},
        EventListResolver,
        AuthService,
        VoterService,
        EventResolverService
    ]
})

export class AppModule{ }

function checkDirtyState(createEventComponent: CreateEventComponent){
        if(createEventComponent.isDirty)
            return window.confirm("Please ensure you have saved the data. Are you sure to navigate")
            return true;
}