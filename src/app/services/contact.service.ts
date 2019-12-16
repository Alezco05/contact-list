import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../interfaces/Contact';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _listContacts: Contact[] = [];
  constructor(private http: HttpClient) { }
  get listContacts(): Contact[]{
    return this._listContacts;
  }
  addContact(contact: Contact){
    this._listContacts.push(contact);
  }

  getData(path: string){
    return this.http.get<Contact[]>(path).pipe(
      map(list=> {
        this._listContacts = list;
        return list;
      })
    );
  }
}
