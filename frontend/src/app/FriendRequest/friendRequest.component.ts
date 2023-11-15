import { Component } from '@angular/core';
import { UserService } from "../Service/user.service";
import { User } from '../Models/user';

@Component({
    selector: 'app-friendRequest',
    templateUrl: './friendRequest.component.html',
    styleUrls: ['./friendRequest.component.css']
})
export class FriendRequestComponent  {
   // friendRequests: string[] | any;
    searchUser: string = '';
    foundUser: User[] =[];
    incomingFriendRequests: string[] = [];

    constructor(private userService: UserService) {}


    search() {
        if (this.searchUser) {
            this.foundUser = [];

            this.userService.findByFirstName(this.searchUser).subscribe(results => {
                this.foundUser = results;
            });

            this.userService.findByLastName(this.searchUser).subscribe(results => {
                this.foundUser = this.foundUser.concat(results);
            });

            this.userService.findByEmail(this.searchUser).subscribe(results => {
                this.foundUser = this.foundUser.concat(results);
            });
        } else {
            this.foundUser = [];
        }
    }


    sendFriendRequest(requestedUser: string) {
        this.userService.sendFriendRequest(requestedUser).subscribe();
            this.incomingFriendRequests= ["Test"];

    }

    acceptFriendRequest(requestedUser: string) {
        this.userService.acceptFriendRequest(requestedUser).subscribe();

        alert(`Freundschaftsanfrage von ${requestedUser} angenommen.`);
    }

    rejectFriendRequest(requestedUser: string) {
        this.userService.rejectFriendRequest(requestedUser).subscribe();

        alert(`Freundschaftsanfrage von ${requestedUser} abgelehnt.`);
    }
}
