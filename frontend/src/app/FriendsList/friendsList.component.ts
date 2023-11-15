import {Component, OnInit} from '@angular/core';
import {UserService} from "../Service/user.service";
import {User} from "../Models/user";

@Component({
  selector: 'app-friendsList',
  templateUrl: './friendsList.component.html',
  styleUrls: ['./friendsList.component.css']
})
export class FriendsListComponent implements OnInit{

  users:User[]|any;
  isFriendListPublic!: boolean;

  constructor(private userService: UserService) {
    // this.isFriendListPublic = false;
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data.map((user: User, index: number) => ({
        ...user,
        id: index + 1
      }));
    });
  }

  removeUser(user:User)
  {
    this.userService.delete(user);
    this.users=this.users.filter((u:User) => u.id !== user.id);

    alert('Freund erfolgreich entfernt!');



  }




  setFriendListPrivacy(isPublic: boolean) {
    this.userService.setFriendListPrivacy(isPublic).subscribe(() => {
      window.location.reload();
      alert('Freundesliste Privatsphäre erfolgreich aktualisiert!');
    });
  }




}

