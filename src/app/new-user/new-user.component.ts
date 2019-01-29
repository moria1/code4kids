import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  newAccount(){
    alert("hello");
    this.router.navigate(["/user"]);
  }

}
