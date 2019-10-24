import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {PostsComponent} from './posts/posts.component';
import {PostsAddComponent} from './posts-add/posts-add.component';
import {PostsDetailComponent} from './posts-detail/posts-detail.component';
import {PostsEditComponent} from './posts-edit/posts-edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'posts', component: PostsComponent, data: { title: 'Posts'}},
  {path: 'posts-add', component: PostsAddComponent, data: { title: 'Add Post'}},
  {path: 'posts-detail', component: PostsDetailComponent, data: { title: 'Post Details'}},
  {path: 'posts-edit', component: PostsEditComponent, data: { title: 'Edit Posts'}},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
