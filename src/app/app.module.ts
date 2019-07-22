import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavsComponent } from './navs/navs.component';
import { GallerComponent } from './galler/galler.component';
import { ImgService } from '../app/img/sharing/image.service';
import {ImageFilterPipe } from './img/sharing/filter.pipe';
import { appRoutes } from '../routes';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    GallerComponent,
    ImageFilterPipe,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImgService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }