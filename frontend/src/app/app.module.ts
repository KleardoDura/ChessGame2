import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GameComponent } from './pages/game/game.component';

import { FriendsListComponent } from './FriendsList/friendsList.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendRequestComponent } from './FriendRequest/friendRequest.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    SettingsComponent,
    GameComponent,

    FriendsListComponent,
    FriendRequestComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
