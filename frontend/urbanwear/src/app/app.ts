import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
})
export class App implements OnInit {

  apiMessage: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.testApi().subscribe({
      next: (res: any) => {
        console.log(res);
        this.apiMessage = res;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}
