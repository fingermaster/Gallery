import { Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'appComments',
    template: `
    <div class="comments">
      <div *ngFor="let comment of comments_id" class="item">        
        <div class="text">{{comment.message}}</div>
        <div class="date">{{comment.date | date:'YYYY-M-dd H:m'}}</div>
      </div>      
    </div>
    <div>
        <form class="form" #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
          <input name="newcomment" ngModel required #newcomment="ngModel" placeholder="Your comment"><button>Leave a comment</button>
        </form>
    </div>
    `
    
})
export class CommentsComponent implements OnInit{
  @Input() id = 0;
  comments: [{img_i: number, date: Date, comment: string}] = [
    {img_i: 3, date: new Date(), comment: 'Trem dicta ipsamam assumenda?'}
  ];
  comments_id: [{date: Date, message: string}] = [{date: new Date(), message: 'facere possimus iure error dignissimos asperiores necessitatibus consequatur'}];
  
  onSubmit(f: NgForm) {
    if(f.value.newcomment.length > 0){
        this.comments.push({img_i: this.id, date: new Date(), comment: f.value.newcomment});
        f.resetForm();
        this.compComments();
    }    
  }
  
  compComments(){
    let i = 0;
    this.comments.forEach(element => {
      if(element.img_i == this.id){
        this.comments_id[i] = {date: element.date, message: element.comment};
        i++;
      }
    });
    if(!(this.comments.length > 0)){

    }
  }

  ngOnInit(){            
    this.compComments();
  }    
}