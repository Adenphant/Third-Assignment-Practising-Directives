import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Third Assignment';
  showSecret = false;
  clicks = [];
  

  onButtonClick(){
    this.showSecret = !this.showSecret;
    this.clicks.push(this.clicks.length + 1)
  } 
  // else {
  //   this.text === 'Heyaaaa'
  // }
}
// this.clicks.push('Test')
// if(this.text != '')
// this.text === ''
// this.clicks.push(1 + 1);