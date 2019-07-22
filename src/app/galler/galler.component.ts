import { Component, Input, OnChanges } from '@angular/core';
import { ImgService } from '../img/sharing/image.service';

@Component({
  selector: 'app-galler',
  templateUrl: './galler.component.html',
  styleUrls: ['./galler.component.css']
})
export class GallerComponent implements OnChanges {
  title = "Recent Photos";
  @Input() filterBy?: string = "all";
  visibleImages: any[] = [];
  constructor(private imgService: ImgService) {
      this.visibleImages = this.imgService.getImages();
  }

  ngOnChanges() {
      this.visibleImages = this.imgService.getImages(); 
  }
}
