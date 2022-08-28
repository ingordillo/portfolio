import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ProjectService } from 'src/app/sevices/project.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', ],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  sendEmail(): void {
    this.projectService.sendEmail(this.contactForm.value).subscribe((contact: Contact) => {
      this.contactForm.reset();
    });
    
  }

}
