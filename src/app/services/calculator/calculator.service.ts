import { Injectable } from '@angular/core';
import { LoggerService } from "../logger/logger.service";
import { UserModel } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerServie: LoggerService) { }

  posts: UserModel[] = [];

  getAddition(n1: number, n2: number): number {
    let result = n1 + n2;
    this.loggerServie.log("Addition Done");
    return result;
  }

  getSubtraction(n1: number, n2: number): number {
    let result = n1 - n2;
    this.loggerServie.log("Subtraction Done");
    return result;
  }

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
