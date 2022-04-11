import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';
/*packages is not getting imported automatically,check later*/

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl='https://phone-contacts-application.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  getAllContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contact/contacts`);
  }
  createContact(contact:Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/contact/savecontact`,contact,{responseType:"text"});
  }
  removeContact(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`,{responseType:"text"})
  }
  updateContact(contact:Contact):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/contact/${contact.contactId}`,contact,{responseType:"text"});
  }
  // findContact(id:number):Observable<Contact>{
  //   return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  // }
}
