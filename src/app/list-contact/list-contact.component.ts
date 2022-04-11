import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
   styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

 contacts:Contact[]=[];
 constructor(private contactService:ContactService, private router:Router)  { }

  ngOnInit(): void {
    this.getAllContacts();
  }
  getAllContacts(){
    this.contactService.getAllContacts().subscribe(
      data=>{
        this.contacts=data;
      }
    );
  }
  //remove a contact
  deleteContact(id:number){
    this.contactService.removeContact(id).subscribe(
      data=>{
        console.log("DELETION SUCCESSFULL........");
        console.log(data);
        this.getAllContacts();
      },
      error=>{
        console.log("DELETION FAILED........");
        console.log(error);
      }
    )
   }
   //edit a contact
  editContact(contact:Contact){
    console.log("Checking Data is coming in edit-contact, ContactName ="+contact.contactName);
    //passing the Contact Object To edit-Contact Component
    this.router.navigate(['/edit',{contactObj:JSON.stringify(contact)}]); 
  }

}
