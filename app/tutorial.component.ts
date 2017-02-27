import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`
    <h2>Tutorial Component</h2>
    <h3 [class.greenColor]="applyClass">apply style class</h3>
    <h4 [style.color]="yellowColor?'yellow':'orange'">Apply Style</h4>
    `,
    styles:[` 
        h2 {color: purple}       
        .greenColor {
            color:green;
        }
        `]
})
export class TutorialComponent{ 
    public applyClass = true;
    public yellowColor = true;
}