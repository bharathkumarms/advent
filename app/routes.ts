import {Routes} from '@angular/router'
import {EventResolverService} from './events/event-resolver.service'

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    HelpdeskComponent
} from './events/index'

import {Error404Component} from './errors/404.component'

import {EventListResolver} from './events/events-list-resolver.service';

export const appRoutes:Routes = [
    {path:'events/new',component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component:EventsListComponent, resolve:{events:EventListResolver}},
    {path:'events/:id', component:EventDetailsComponent, resolve:{event:EventResolverService}},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:'app/user/user.module#UserModule'},
    {path:'events/session/new', component:CreateSessionComponent},
    {path:'helpdesk', component:HelpdeskComponent}
]