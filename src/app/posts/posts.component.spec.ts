import { PostsComponent } from "./posts.component";
import { UserModel } from "../models/user.model";
import { of } from "rxjs";
describe('Posts Component', () => {
  let mockLoggerService: any;
  let postsComponent: PostsComponent;
  let POSTS: UserModel[];
  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log', 'getAllPosts', 'deletePost']);
    postsComponent = new PostsComponent(mockLoggerService);
    POSTS = [{
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }]

  })

  describe('Delete Post Function', () => {
    it('should delete the post', () => {
      //assign - calculator service instance does not hold anything - not even post information
      mockLoggerService.deletePost.and.returnValue(of(true));
      postsComponent.posts = POSTS;
      //act
      postsComponent.deletePost(POSTS[1]);
      //assert
      expect(postsComponent.posts.length).toBe(2);
    })

    it('should called delete post method once', () => {
      //assign - calculator service instance does not hold anything - not even post information
      mockLoggerService.deletePost.and.returnValue(of(true));
      postsComponent.posts = POSTS;
      //act
      postsComponent.deletePost(POSTS[1]);
      //assert
      expect(mockLoggerService.deletePost).toHaveBeenCalledTimes(1);
    })

    it('should delete same post whose id has been passed', () => {
      //assign - calculator service instance does not hold anything - not even post information
      mockLoggerService.deletePost.and.returnValue(of(true));
      postsComponent.posts = POSTS;
      //act
      postsComponent.deletePost(POSTS[1]);

      let isStillContain = postsComponent.posts.find(eachPost => eachPost.id === POSTS[1].id);
      //assert
      expect(isStillContain).toBeUndefined();
    })
  })
})