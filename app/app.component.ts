import { Person } from './app.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person: Person;

  @Input() save: Person;

  personSelected(value: Person | null) {
    this.person = value;
  }

}
