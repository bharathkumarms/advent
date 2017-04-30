import {Component, OnInit,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    templateUrl:'app/events/shared/helpdesk.component.html',
    styles:[`
    em{float:right;color:#E05C65;padding-left:10px;}
    .error input,.error select,.error textarea{background-color:#E3C3C5}
    .error ::-webkit-input-placeholder{color:#999}
    .error ::-moz-placeholder{color:#999}
    .error ::-moz-placeholder{color:#999}
    .error ::-ms-input-placeholder{color:#999}
    .advent-table{font-size: 18px;}
  `]
})

export class HelpdeskComponent implements OnInit{
    comments:FormControl
    newHelpdeskForm:FormGroup
    commentsList:any[]
    constructor(private router:Router){
        this.commentsList=["The tool is good. Please add more colors.","Please add more images and jazzy items.",'Good!','Great!']
    }
    ngOnInit(){
        this.comments = new FormControl('',Validators.required)
        this.newHelpdeskForm = new FormGroup({
            comments:this.comments
        })
    }

    saveHelpDesk(formValues){
        this.commentsList.push(formValues.comments);
    }

    cancelHelpdesk(){
        this.router.navigate(["events"]);
    }
}

