import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GameComponent } from './pages/game/game.component';
import { FriendsListComponent } from './FriendsList/friendsList.component';
import { FriendRequestComponent } from './FriendRequest/friendRequest.component';
import { LoginComponent } from './login/login-view.component';

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'game', component: GameComponent },
  { path: 'friendsList', component: FriendsListComponent },
  { path: 'friendRequests', component: FriendRequestComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
