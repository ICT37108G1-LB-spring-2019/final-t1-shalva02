// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-img',
//   templateUrl: './img.component.html',
//   styleUrls: ['./img.component.css']
// })
// export class ImgComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';
// import { ImageService } from './sharing/image.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router'
import { ImgService } from './sharing/image.service';

@Component({
    selector: 'img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit{
    image: any
    constructor(private imageService: ImgService, private route: ActivatedRoute) {}
    ngOnInit() {
        this.image = this.imageService.getImage(+this.route.snapshot.params["id"])
    }
} 