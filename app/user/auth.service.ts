import {Injectable} from '@angular/core'
import { IUser } from "./user.model";
import {HttpModule,Http,Response,Headers,Request,RequestOptions} from '@angular/http'
import {Subject,Observable} from 'rxjs/RX'

@Injectable()
export class AuthService{
    constructor(private http:Http){}
    currentUser: IUser
    loginUser(userName:string,password:string){
      let headers = new Headers({'Content-Type':'application/json'})
      let options =  new RequestOptions({headers:headers})
      let loginInfo = {username:userName,password:password}

      return this.http.post('api/login',JSON.stringify(loginInfo),options).do((response:Response)=>{
        if(response){
            this.currentUser = <IUser>response.json().user
        }
      }).catch(error=>{
          return Observable.of(false)
      })
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    checkAuthnticationStatus(){
        return this.http.get('/api/currentIdentity').map((response:any)=>{
            if(response._body){
                return response.json();
            }else{
                return {}
            }
        })
        .do(currentUser =>{
            if(!!currentUser.userName){
                this.currentUser = currentUser;
            }
        }).subscribe()
    }

    updateCurrentUser(fn:string,ln:string){
        this.currentUser.firstName = fn;
        this.currentUser.lastName = ln;

        let headers = new Headers({'Content-Type':'application/json'})
        let options =  new RequestOptions({headers:headers})

        return this.http.put(`/api/users/${this.currentUser.id}`,
            JSON.stringify(this.currentUser),options)
    }

    logout(){
        this.currentUser = undefined;
        let headers = new Headers({'Content-Type':'application/json'})
        let options =  new RequestOptions({headers:headers})

        return this.http.post(`/api/logout/`,
            JSON.stringify({}),options);
    }
}

