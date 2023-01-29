import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends';


  list = ""
  Friends: string[] = [];


  add() {

    // alert("hello");
    this.Friends.push(this.list);
    this.list = "";
  }


  delete(i: number) {
    this.Friends.splice(i, 2);

  }
}
