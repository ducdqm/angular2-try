import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{title}}</h1>
  <img  src='http://lorempixel.com/100/100' />
  <img [src]='image' />
  <my-tutorial></my-tutorial>
  <input type="text" [value]="welcometext"/>`,
  styles:['h4 {color:blue;}']
})
export class AppComponent {
  public title = "Main Component 1"

  //property binding
  public image = 'http://lorempixel.com/100/100'
  public welcometext = 'welcome to ganular'
}
