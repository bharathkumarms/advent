import {Component,Input,OnInit,Output,EventEmitter} from '@angular/core'

import {ISession, restrictedWords} from '../shared/index'

import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
    selector:"collapsible-well",
    template:`
        <div (click)="toggleContent()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent{
    visible=true;
    toggleContent(){
        this.visible=!this.visible;
    }
}