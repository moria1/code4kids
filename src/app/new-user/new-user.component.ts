import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUser:users;

  constructor(private router:Router, private userService:UsersService) { }

  ngOnInit() {
    this.newUser = new users();
  }

  newAccount(){
    alert("hello");
    console.log(this.newUser);
    this.userService.addUser(this.newUser);
    this.router.navigate(["/user"]);
  }
}
