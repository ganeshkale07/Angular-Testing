import { Component, OnInit } from '@angular/core';
import { UserModel } from "../models/user.model";
import { LoggerService } from "../services/logger/logger.service";
import { PostComponent } from "../post/post.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  constructor(private loggerServie: LoggerService) {

  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  posts: UserModel[] = [];

  getAllPosts() {
    this.loggerServie.getAllPosts().subscribe(val => {
      this.posts = val;
    })
  }

  deletePost(post: UserModel): any {
    this.posts = this.posts.filter(eachPost => post.id !== eachPost.id);
    this.loggerServie.deletePost(post).subscribe();
  }
}
