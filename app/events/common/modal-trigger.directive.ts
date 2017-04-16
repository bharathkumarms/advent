import {Directive,OnInit,Inject,ElementRef,Input} from '@angular/core'
import {JQ_TOKEN} from './jQuery.service'

@Directive({
    selector:'[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el:HTMLElement
    @Input('modal-trigger') modalId:string
    constructor(@Inject(JQ_TOKEN) private $:any, el:ElementRef){
        this.el = el.nativeElement
    }
    ngOnInit(){
        this.el.addEventListener('click',e=>{
            this.$(`#${this.modalId}`).modal({})
        })
    }
}