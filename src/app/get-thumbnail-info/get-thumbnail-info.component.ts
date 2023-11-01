import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditingDataService } from '../services/editing-data.service';

@Component({
  selector: 'app-get-thumbnail-info',
  templateUrl: './get-thumbnail-info.component.html',
  styleUrls: ['./get-thumbnail-info.component.css']
})
export class GetThumbnailInfoComponent {


  
  public vedioInfo : any
  thumbnailUrl: string = '';
  videoUrl: string = '';


  thumbnails: File | null = null;
  videos: File | null = null;

  selectFiles(file:any){
    if(file.target.files){
      const reader = new FileReader()
      reader.readAsDataURL(file.target.files[0])
      reader.onload = (event:any)=>{
        this.thumbnailUrl = event.target.result
      }
    }
  }

  selectedImage: string | ArrayBuffer | null = null;

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

  constructor(private activateRoute:ActivatedRoute,private editingService:EditingDataService) { }
  dataInfo: any = { name:'', thumbnails:'', videos:''};



  ngOnInit(): void {
      this.editingService.getThumbnailData().subscribe({
      next:data=>{
        this.dataInfo=data;
        this.thumbnailUrl=data.thumbnails;
        this.videoUrl=data.videos;

        this.selectedImage=data.thumbnails;

        // this.thumbnails=data.thumbnails;

      },
      error:e=>{
      alert("Failed due to Network Error");
      }
    })
  }


  // onThumbnailSelected(event: any) {
  //   const fileList: FileList = event.target.files;
  //   if (fileList.length > 0) {
  //     this.thumbnails = fileList[0];
      
  //   }
  // }



  onVideoSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.videos = fileList[0];
    }
  }



}
