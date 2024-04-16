import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from "../models/user.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input('post') post!: UserModel;
  @Output('deletePostFromChild') deletePostFromChild = new EventEmitter<UserModel>()

  deletePost(event: Event) {
    event.stopPropagation();
    this.deletePostFromChild.emit()
  }
}
