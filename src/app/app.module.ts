import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GetThumbnailInfoComponent } from './get-thumbnail-info/get-thumbnail-info.component';
import { GetVideoRequestComponent } from './get-video-request/get-video-request.component';
import { ThumbnailVideoComponent } from './thumbnail-video/thumbnail-video.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    GetThumbnailInfoComponent,
    GetVideoRequestComponent,
    ThumbnailVideoComponent,
    LoginInterfaceComponent,
    ActiveUsersComponent,
    FooterComponent,
    NavbarComponent,
    FeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
