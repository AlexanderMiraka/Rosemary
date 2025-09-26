import { CommonModule } from '@angular/common';
import { Component,Injectable,OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rosemaryHeader } from './global/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,rosemaryHeader],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//provides a global signal of user
@Injectable({
  providedIn: 'root',
})
//signal method setter
export class AppComponent {
  title = 'rosemary';
  user = signal({username:'', email:'', password:'', mobile:'', biography:'', rank:'', recipeCount:0, cookingClassesCount:0});
  userIsLogged = signal(false); 
  setUser(user:any) {
      this.user.set(user);
  }
  setUserIsLogged(areThey:boolean) {
    this.userIsLogged.set(areThey);
  }

}
