import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CompletatiComponent } from './completati/completati.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Route } from '@angular/router';
const routes:Route[]=[
  {
    path:'/completed',
    component: CompletatiComponent,
  },
  {
    path:'/',
    component: TodoComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
