import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData = {
    name: '',
    email: '',
  };
  
  onSubmit() {
    // Handle form submission here
    console.log('Form data submitted:', this.formData);
    // You can now send the data to your server or perform other actions.
  }
}
