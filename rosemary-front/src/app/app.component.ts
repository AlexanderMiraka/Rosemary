import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rosemaryHeader } from './global/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,rosemaryHeader],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rosemary';
}
