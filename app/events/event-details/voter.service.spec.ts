import {VoterService} from './voter.service'
import {ISession} from '../shared/event.model'
import {Observable} from 'rxjs/Rx'

describe('VoterService',()=>{
    let voterService:VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter',()=>{
        it('should remove voters from list of voters',()=>{
            var sessions = {id:6,voters:["joe","john"]};
            mockHttp.delete.and.returnValue(Observable.of(false));
            voterService.deleteVoter(3,<ISession>sessions,"joe");
            expect(sessions.voters.length).toBe(1);
            expect(sessions.voters[0]).toEqual("john");
        })

        it('should call http.delete with the right url',()=>{
            var sessions = {id:6,voters:["joe","john"]};
            mockHttp.delete.and.returnValue(Observable.of(false));
            voterService.deleteVoter(3,<ISession>sessions,"joe");

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe')
        })

        describe('addVoter',()=>{
            it('should call http.post with the right url',()=>{
            var sessions = {id:6,voters:["joe","john"]};
            mockHttp.post.and.returnValue(Observable.of(false));
            voterService.addVoter(3,<ISession>sessions,"bharath");

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/bharath',"{}",jasmine.any(Object));
        })
        })
    })
})