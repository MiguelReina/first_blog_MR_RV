import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'

const routes = [
    {
      path: '',
      component: HomeComponent,
    }
];

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule {

}
