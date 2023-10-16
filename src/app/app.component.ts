import { Component } from '@angular/core';

@Component({
  selector: 'kno-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = 'Edoardo'

  onClick() {
    this.name = this.name == 'Edoardo' ? 'Samuele' : 'Edoardo'
    console.log('Ciao ' + this.name)
  }



}
