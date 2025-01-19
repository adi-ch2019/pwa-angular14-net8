import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-values',
  imports: [CommonModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css'
})
export class ValuesComponent implements OnInit {

  values:string[]=[];

  constructor (private apiService: ApiServiceService) { }
 
  ngOnInit(): void {
    this.apiService.getValues().subscribe(data => {
     this.values = data;
     });
}
}
