import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './users/users.service';
import { rosemaryHeader } from './global/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,rosemaryHeader],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rosemary';
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
}
