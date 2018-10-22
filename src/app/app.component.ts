import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['Joe', 'Viente', 'Galilea', 'Antonio'];
  activated = true;
  name = 'Vicente';
  age: number;
  address: {
    street: string;
    city: string;
  };

  hobbies: string[];

  constructor() {
    this.age = 28;
    this.address = {
      street: '221B Baker Street',
      city: 'London'
    };
    this.hobbies = ['swimming', 'read', 'write'];
  }

  deleteUser(user: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}
