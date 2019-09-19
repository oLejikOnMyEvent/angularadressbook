import { Person } from './../app.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  private value: Person;

  @Input() set person(value: Person) {
    this.form.reset(value);
    this.value = value;
  }

  @Output() save = new EventEmitter<Person>();

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [, Validators.required],
      surname: [,]
    });
  }

  udpatePerson() {
    this.value.name = this.form.value.name;
    this.value.surname = this.form.value.surname;
    this.save.emit(this.value);
  }



  get name() { return this.form.get('name'); }

  ngOnInit() {
  }
}
