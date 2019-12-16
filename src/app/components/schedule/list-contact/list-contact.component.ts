import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Contact } from 'src/app/interfaces/Contact';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  listContacts: Contact[];
  constructor(private contactService: ContactService) { 
    this.listContacts = [];
  }

  ngOnInit() {
    if(this.contactService.listContacts.length > 0){
      this.listContacts = this.contactService.listContacts;
    }
    else{
      this.contactService.getData('assets/data/contacts.json').subscribe(
        resp => this.listContacts = resp,
        error => console.log(error)
      );
    }
  }

}
