import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {

  greetingMessage:string;
  constructor(private http: HttpClient) { }

  ngOnInit():void{
    this.http.get<string>('https://localhost:5001/api/greeting').subscribe({
      next: (message)=> {
        this.greetingMessage=message;
      },
      error:(error)=>{
        console.error('Error fetching greeting',error);
      }
    });
  }

}
