import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  ngOnInit(): void {
  }
  contact:Contact=new Contact();

    constructor(private contactService:ContactService,
    private router:Router) { }

    onSubmit(){
      console.log(this.contact);
      this.saveContact();
    }
    saveContact(){
      this.contactService.createContact(this.contact).subscribe(
        data=>{
          console.log("SUCCESSFULL........");
          console.log(data);
          this.redirectToContactList();
        },
        error=>{
          console.log("FAILED........");
          console.log(error);
        }
      );
    }
    redirectToContactList(){
      this.router.navigate(['/contacts']);
    }

}
