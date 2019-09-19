import { Group, Person } from './../app.model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {


  @Output() selected = new EventEmitter<Person | null>();
  groups: Group[];

 

  constructor() {
    this.groups = [{
      name: 'friends',
      people: [
        {
          name: 'semen',
          surname: 'vasilev'
        },
        {
          name: 'vasya',
          surname: 'semenov'
        }
      ]
    }];
  }

  itemClicked(item: Person) {
    this.selected.emit(item);
  }

  addNewPerson() {
    this.selected.emit({ name: '', surname: '' });
  }

  ngOnInit() {

  }



}
