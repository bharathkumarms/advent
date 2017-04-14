import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {
    EventListResolver,
    EventsListComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventService
} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'

import {ToastrService} from './events/common/toastr.service';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component'

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    bootstrap:[EventsAppComponent],
    providers:[
        EventService,
        ToastrService,
        EventRouteActivator,
        {provide:'canDeactivateCreateEvent', useValue:checkDirtyState},
        EventListResolver
    ]
})

export class AppModule{ }

function checkDirtyState(createEventComponent: CreateEventComponent){
        if(createEventComponent.isDirty)
            return window.confirm("Please ensure you have saved the data. Are you sure to navigate")
            return true;
}