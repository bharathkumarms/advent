import {Injectable} from '@angular/core'
import {IEvent,ISession} from '../shared/event.model'
import {HttpModule,Http,Response,Headers,Request,RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class VoterService{
    constructor(private http:Http){}
    deleteVoter(eventId:number,session:ISession,user:string){
        session.voters = session.voters.filter(s=> s !== user);
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${user}`;
        this.http.delete(url).catch(this.handleError).subscribe()
    }

    addVoter(eventId:number,session:ISession,user:string){
      session.voters.push(user)
      let headers = new Headers({'Content-Type':'application/json'})
      let options =  new RequestOptions({headers:headers})
      let url = `/api/events/${eventId}/sessions/${session.id}/voters/${user}`;

      this.http.post(url,JSON.stringify({}),options).catch(this.handleError).subscribe() 
    }

    handleError(error:Response){
        return Observable.throw(error.statusText);
    }

    userHasVoted(session:ISession,user:string){
        return session.voters.some(s=>s === user);
    }
}