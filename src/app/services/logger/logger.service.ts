import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http: HttpClient) {
    console.log("logger const")
  }

  messages: string[] = [];

  log(message: string) {
    console.log("logger service called")
    return this.messages.push(message);
  }

  getAllPosts(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

  deletePost(post: UserModel) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/post/${post.id}`);
  }

}
