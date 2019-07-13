import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any; // used to receive from parent component to child - parent to child component communication
  @Output() cancelRegister = new EventEmitter();  // used to send info to parent and always emitts events-child to parent communcation
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    // console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
