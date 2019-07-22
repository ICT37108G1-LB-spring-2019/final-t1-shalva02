import { Injectable } from '@angular/core';

@Injectable()
export class ImgService {
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id:number) {
        return IMAGES.slice(0).find(image => image.id == id); 
    }
}

const IMAGES = [
    {"id": 1, "category": "first", "caption": "first", "url": "assets/images/first.jpg"},
    {"id": 2, "category": "second", "caption": "second", "url": "assets/images/second.jpg"},
    {"id": 3, "category": "third", "caption": "third", "url": "assets/images/third.jpg"},
    {"id": 4, "category": "four", "caption": "four", "url": "assets/images/four.jpg"},
    {"id": 5, "category": "five", "caption": "five", "url": "assets/images/five.jpg"},
    {"id": 6, "category": "six", "caption": "six", "url": "assets/images/six.jpg"}
    
]