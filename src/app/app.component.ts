import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppleStore';
  constructor(
    private auth: AuthService,
    router: Router,
    private userService: UserService
  ){
    auth.user$.subscribe(user => {
      if(user){
        // Lưu user vào firebase database
        userService.save(user);
        // nếu có user đăng nhập vào thỉ redirective lại cái trang lưu trữ
        let returnUrl = localStorage.getItem('returnUrl');
        if(returnUrl){
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    });
  }
}
