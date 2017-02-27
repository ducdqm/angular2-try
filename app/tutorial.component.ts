import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`
    <h2>{{title}}</h2>
    <button (click)="OnClick(name.value)">Click me</button>
    <button (click)="OnClick($event)">Click me</button>
    <input type="text" #name />
    `,

})
export class TutorialComponent{ 
    public title = 'This is lesson 9';

    OnClick(value){
        console.log(value);
    }
}