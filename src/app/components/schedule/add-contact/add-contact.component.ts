import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interfaces/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact;
  constructor(private contactService: ContactService,
    private router: Router) { 
      this.contact =  {
        'name': '',
        'surname': '',
        'description': '',
        'sex': 'masculino',
        'email': '',
        'telephone': 0
      };
    }

  ngOnInit() {
  }
  agregarContacto(e):boolean{
    console.log(this.contact)
    this.contactService.addContact(this.contact);
    this.router.navigate(['/list-contact']);
    return false;
  }
}
