import { Component, OnInit, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {

  greetingMessage:string='';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5185/api/Greetings').subscribe({
        next: (response) => {
            // Check if the response is a string or an object
            if (typeof response === 'string') {
                this.greetingMessage = response; // Directly assign the string
            } else if (response && response.message) {
                this.greetingMessage = response.message; // Access the message property
            } else {
                this.greetingMessage = 'Unexpected response format'; // Handle unexpected format
            }
        },
        error: (error) => {
            console.error('Error fetching greeting', error);
        }
    });
}


}
