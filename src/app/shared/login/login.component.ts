import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {ApiService} from '../../../app/api.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() user = new User();

  constructor(private authService: ApiService, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(data => {
      // this.notifyService.showSuccess(data.message, 'Sucess');
      localStorage.setItem('currentUser', JSON.stringify({ token: data.token }));
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      // this.notifyService.showError(err, 'System Error');
      console.log('error');
    });
  }

}


