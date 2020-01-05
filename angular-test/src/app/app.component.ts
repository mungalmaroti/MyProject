import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputX : number = 500;
  public inputY : number = 500;
  public containers = [];

  createBoxModel(){
    this.containers.push(this.containers.length);
  }
  getRandomColor(){
    console.log('Hello');
  }
}
