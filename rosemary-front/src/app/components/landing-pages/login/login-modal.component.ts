import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerUser, loginUser } from '../../utils/fucntions/calls';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { userInfo } from 'os';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  imports: [FormsModule],
  standalone: true,
})
//add keywords of public or private etc, to constructor to create instance of the class
export class loginModal {
  constructor(private router: Router, public user:AppComponent) {}
  @Output() closeModal = new EventEmitter<boolean>(); //passes false to parent when modal closes
  close() {
    this.closeModal.emit(false);
  }
  modalShow: String = 'login';
  toggleModal(toogle: String): String {
    this.modalShow = toogle;
    return this.modalShow;
  }
  currentUser = {
    username: '',
    email: '',
    password: '',
    mobile: '',
    biography: '',
  };
  async formSubmit(form: any, mode: String) {
    if (mode === 'register') {
      await registerUser(this.currentUser).then(() => {
        loginUser(this.currentUser);
        this.user.setUser(this.currentUser);
      });
      this.close();
      this.user.setUserIsLogged(true);
      this.router.navigate([`/user/:${this.currentUser.username}`]);
    } else if (mode === 'login') {
      const error = await loginUser(this.currentUser);
      if(error === 401 || error === 404) {
        alert("Invalid Credentials");
      }
      else {
        this.close();
        this.user.setUserIsLogged(true);
        this.router.navigate([`/user/:${this.currentUser.username}`]);
        this.user.setUser(this.currentUser);
      }
      
      
    }
  }
}
