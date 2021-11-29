import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'appComments',
    template: `
    <div class="comments">
      <div *ngIf="hasComments">
        <div *ngFor="let comment of comments_id" class="item">        
          <div class="text">{{comment.message}}</div>
          <div class="date">{{comment.date | date:'YYYY-M-dd H:m'}}</div>
        </div>      
      </div>
    </div>
    <div>
        <form class="form" #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
          <input name="newcomment" ngModel required #newcomment="ngModel" placeholder="Your comment"><button>Leave a comment</button>
        </form>
    </div>
    `
    
})
export class CommentsComponent implements OnInit, OnChanges{
  @Input() id = 0;
  ngOnChanges(changes: SimpleChanges){
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    this.compComments();
  }
  comments: [{img_i: number, date: Date, comment: string}] = [
    {img_i: 3, date: new Date(), comment: 'Trem dicta ipsamam assumenda?'}
  ];
  comments_id: [{date: Date, message: string}] = [{date: new Date(), message: 'facere possimus iure error dignissimos asperiores necessitatibus consequatur'}];
  hasComments = 0;

  onSubmit(f: NgForm) {
    if(f.value.newcomment.length > 0){
        this.comments.push({img_i: this.id, date: new Date(), comment: f.value.newcomment});
        f.resetForm();
        this.compComments();
    }    
  }
  
  
  compComments(){
    let i = 0;
    let match = 0;
    while (this.comments_id.length) {
      this.comments_id.shift();
    }
    this.comments.forEach(element => {
      if(element.img_i == this.id){
        match++;
        this.comments_id[i] = {date: element.date, message: element.comment};
        i++;
      }
    });
    if(match == 0) this.hasComments = 0;    
    else  this.hasComments = 1;
  }

  ngOnInit(){            
    this.compComments();
  }    
}