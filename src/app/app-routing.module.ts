import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { ThumbnailVideoComponent } from './thumbnail-video/thumbnail-video.component';
import { GetVideoRequestComponent } from './get-video-request/get-video-request.component';
import { GetThumbnailInfoComponent } from './get-thumbnail-info/get-thumbnail-info.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

const routes: Routes = [
  {path:'',component:LoginInterfaceComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'login',component:LoginInterfaceComponent},
  // {path:'register',component:RegisterInterfaceComponent},
  {path:'add-thumbnail',component:ThumbnailVideoComponent},
  {path:'all-feedbacks',component:FeedbacksComponent},
  {path:'get-vedio-request',component:GetVideoRequestComponent},
  {path:'get-thumbnail-data',component:GetThumbnailInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
