import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

import { User } from '../../Models/user';
import { first, last } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.css'],
})
export class RegistrationViewComponent {
  //Data coming in
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  password_confirm!: string;
  birthday!: Date;
  profilimage!: File;

  user: User;

  isUser: boolean = true;
  showDate: boolean = false;

  registrationMSG: string = '';

  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) {
    this.user = new User();
  }

  toggleRegistration() {
    if (!this.checkInputData()) return;
    this.assignAttributesToAccountType();
    this.register();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.profilimage = file;
    }
  }

  checkInputData(): boolean {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.password);
    console.log(this.email);
    //Input Email Kontrolle
    if (
      !this.email ||
      !(this.email.indexOf('@') >= 0) ||
      !(this.email.indexOf('.') >= 0)
    ) {
      alert('email nicht Korrekt angegeben.');
      return false;
    }
    console.log(this.birthday);
    // Input Geburtstag Kontrolle
    const birthday = new Date(this.birthday);

    console.log(this.profilimage);

    // // Überprüfen, ob die Eingabe ein gültiges Datum ist
    //     if (!isNaN(Number(birthday))) {
    //       alert("Geburtstag nur mit Zahlen angeben.");
    //       return false;
    //     }
    //
    // // Überprüfen, ob das Datum in der richtigen Länge ist
    //     if (Number(this.birthday.toString()) !== 10) {
    //       alert("Geburtstag nicht in korrekter Länger angegeben.");
    //       return false;
    //     }

    //Input Passwort Kontrolle
    if (this.password.toString() != this.password_confirm.toString()) {
      alert('passwörter stimmen nicht überein.');
      return false;
    }

    return true;
  }

  assignAttributesToAccountType() {
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.birthday = this.birthday;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.profileImage = this.profilimage;
  }

  register() {
    // Zugriff auf Backend durch RegistrationService
    //User Registration
    this.registrationService.registerUser(this.user).subscribe((response) => {
      if (response.body != null) alert(response.body);
      // if (response.status == 201)           this.router.navigate(['/login'], {replaceUrl: true})
    });
  }

  protected readonly last = last;

  ngOnInIt(): void {}

  protected readonly first = first;
}
