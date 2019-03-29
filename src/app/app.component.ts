import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo3';
   status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}
  testX(){
    console.log('test');
  }
 
}
