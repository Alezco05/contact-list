import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interfaces/Contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact = {
    'name': '',
    'surname': '',
    'description': '',
    'sex': 'masculino',
    'email': '',
    'telephone': 0
  };
  constructor() { }

  ngOnInit() {
  }
  agregarContacto(e):boolean{
    console.log(this.contact)
    return false;
  }
}
