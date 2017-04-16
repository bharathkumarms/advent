import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {AuthService} from './user/auth.service'

import {
    EventListResolver,
    EventsListComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventService,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'

import {TOASTR_TOKEN,Toastr} from './events/common/toastr.service';
import {CollapsibleWellComponent} from './events/common/collapsible-well.component';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component'

declare let toastr:Toastr;

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
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
        DurationPipe
    ],
    bootstrap:[EventsAppComponent],
    providers:[
        EventService,
        {provide:TOASTR_TOKEN,useValue:toastr},
        {provide:EventRouteActivator,useClass:EventRouteActivator},
        {provide:'canDeactivateCreateEvent', useValue:checkDirtyState},
        EventListResolver,
        AuthService
    ]
})

export class AppModule{ }

function checkDirtyState(createEventComponent: CreateEventComponent){
        if(createEventComponent.isDirty)
            return window.confirm("Please ensure you have saved the data. Are you sure to navigate")
            return true;
}