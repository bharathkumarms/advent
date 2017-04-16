import {Injectable} from '@angular/core'
import {IEvent,ISession} from '../shared/event.model'

@Injectable()
export class VoterService{
    deleteVoter(session:ISession,user:string){
        session.voters = session.voters.filter(s=> s !== user);
    }

    addVoter(session:ISession,user:string){
        session.voters.push(user)
    }

    userHasVoted(session:ISession,user:string){
        return session.voters.some(s=>s === user);
    }
}