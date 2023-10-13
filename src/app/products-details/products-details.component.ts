import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  getProjectDatas:any;
  projectData:any;
  constructor(private param:ActivatedRoute, public service: MainService){}

  ngOnInit(){
    this.getProjectDatas = this.param.snapshot.paramMap.get('id');
    console.log(this.getProjectDatas,'getProjectDatas');
    
    if (this.getProjectDatas) {
      this.projectData = this.service.data.filter((value) => {
        return value.id == this.getProjectDatas;
      });
      console.log(this.projectData, 'projectData>>>');
      
    }
  }

  // onImageClick(){
  //   this.service.projects[0].project_image_highlights.image_link
  // }
}
