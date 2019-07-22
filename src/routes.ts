import { Routes } from '@angular/router';
import { GallerComponent } from './app/galler/galler.component';
import { ImgComponent } from './app/img/img.component'; 

export const appRoutes: Routes = [
    {path: "galler", component: GallerComponent},
    {path: "img/:id", component: ImgComponent},
    {path: "", redirectTo: "/galler", pathMatch: "full"}
]