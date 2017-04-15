import {Injectable} from '@angular/core'
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser: IUser
    loginUser(userName:string,password:string){
        this.currentUser={
            id:1,
            userName:userName,
            firstName:"Bharath",
            lastName:"Kumar"
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(fn:string,ln:string){
        this.currentUser.firstName = fn;
        this.currentUser.lastName = ln;
    }
}

