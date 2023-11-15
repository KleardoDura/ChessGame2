import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  handleLogin(): void {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Email und Passwort werden benötigt.');
      return;
    }
    this.loginService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        if (response.success) {
          alert('Erfolgreich eingeloggt!');
          this.router.navigate(['/friendlist']);
        } else {
          alert('Ungültige Email oder falsches Passwort!');
        }
      },
      (error: any) => {
        console.error('Fehler beim Login: ', error);
        alert('Login fehlgeschlagen. Bitte versuche es erneut.');
      }
    );
  }


}
