import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerUser, loginUser } from '../../utils/fucntions/calls';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { userInfo } from 'os';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  imports: [FormsModule, CommonModule],
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
    this.selectToggle(toogle);
    return this.modalShow;
  }
  isSelected: boolean = true;
  selectToggle(toogle:String) {
    if(toogle === 'login') {
      this.isSelected = true;
    }
    else {
      this.isSelected = false;
    }
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
      await registerUser(this.currentUser).then((res) => {
        loginUser(this.currentUser);
        this.user.setUser(res);
      });
      this.close();
      this.user.setUserIsLogged(true);
      this.router.navigate([`/user/:${this.currentUser.username}`]);
    } else if (mode === 'login') {
      const response = await loginUser(this.currentUser);
      if(response === 401 || response === 404) {
        alert("Invalid Credentials");
      }
      else {
        this.close();
        this.user.setUserIsLogged(true);
        this.router.navigate([`/user/:${this.currentUser.username}`]);
        this.user.setUser(response);
      }
    }
  }
}
