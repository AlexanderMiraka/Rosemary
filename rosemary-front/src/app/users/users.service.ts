import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // ✅ NestJS API endpoint

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl); // GET /users
  }

  createUser(user: { name: string; email: string }) {
    return this.http.post(this.apiUrl, user); // POST /users
  }
}
