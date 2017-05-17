/**
 * Created by rquazi on 03/05/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {HomeComponent} from "./views/home/home.component"
import {ImageListComponent} from "./views/imagelist/imagelist.component"


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'imagelist',component:ImageListComponent}

];


