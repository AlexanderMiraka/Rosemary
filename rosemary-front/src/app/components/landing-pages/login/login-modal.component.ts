import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerUser, loginUser } from '../../utils/fucntions/calls';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  imports: [FormsModule],
  standalone: true,
})
export class loginModal {
  @Output() closeModal = new EventEmitter<boolean>(); //passes false to parent when modal closes
  @Output() userIsLogged = new EventEmitter<boolean>();
  close() {
    this.closeModal.emit(false);
  }
  modalShow: String = 'login';
  toggleModal(toogle: String): String {
    this.modalShow = toogle;
    return this.modalShow;
  }
  registerUser = {
    username: '',
    email: '',
    password: '',
    mobile: '',
    biography: '',
  };
  loginUser = {
    username: '',
    password: '',
  };
  async formSubmit(form: any, mode: String) {
    if (mode === 'register') {
      registerUser(this.registerUser);
      this.close();
      this.userIsLogged.emit(true);
    } else if (mode === 'login') {
      const error = await loginUser(this.loginUser);
      if(error === 401 || error === 404) {
        alert("Invalid Credentials");
      }
      else {
        this.close();
        this.userIsLogged.emit(true);
      }
      
      
    }
  }
}
