import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html'
})
export class FirstComponent implements AfterViewInit {
    imgarr = ["g_01", "g_02", "g_03", "g_04", "g_07", "a_01", "a_02", "a_03", "a_05", "g_08", "n_01", "n_02", "n_03", "n_04", "n_05", "a_04", "n_06", "n_07", "n_08", "n_09", "g_05", "n_10", "n_11", "n_12", "n_13", "w_01", "w_02", "w_03", "w_04", "w_05", "w_06", "w_07", "w_08"];
    images: [{src: string, like: number, liked: number, comments: number}] = [{
        src: '', like: 0, liked: 0, comments: 0
    }];

    constructor(){
        let i=0;
        for(let el of this.imgarr){                        
            this.images[i] = {src: './assets/img/'+el+'.jpg', like: this.getRandomInt(0,1), liked: this.getRandomInt(0,500), comments: this.getRandomInt(1-60)};
            i++;
        }        
    }

    getRandomInt(min = 0, max = 10000) {
        min = Math.ceil(min);
        max = Math.floor(max) + 1;
        return Math.floor(Math.random() * (max - min)) + min;
    }
  
    
    ngAfterViewInit() {        
        //console.log(this.imgarr, this.images);
    }

}
