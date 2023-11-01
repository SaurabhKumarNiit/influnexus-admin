import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditingDataService } from '../services/editing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnail-video',
  templateUrl: './thumbnail-video.component.html',
  styleUrls: ['./thumbnail-video.component.css']
})
export class ThumbnailVideoComponent {

  constructor(private fb:FormBuilder,private service:EditingDataService,private route:Router){}

  ngOnInit(): void {
  }

  selectedImage: string | ArrayBuffer | null = null;


  name: string = '';
  thumbnails: File | null = null;
  videos: File | null = null;

  onSubmit() {
    if (this.thumbnails && this.videos) {
      const formData = new FormData();
      formData.append('thumbnails', this.thumbnails);
      formData.append('videos', this.videos);
      formData.append('name', this.name);

      this.service.uploadVideo(formData).subscribe(response => {
        // Handle the response from the server here
        console.log('Response from server:', response);
        window.location.reload();
        
      });
    } else {
      console.log('Please select both a thumbnail and a video file.');
    }
  }

  onThumbnailSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.thumbnails = fileList[0];
    }
  }

  onVideoSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.videos = fileList[0];
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Read the selected image file as a data URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      // If no file is selected, clear the displayed image
      this.selectedImage = null;
    }
  }
 

}
