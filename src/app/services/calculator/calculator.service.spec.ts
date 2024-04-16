
import { CalculatorService } from "./calculator.service";
import { UserModel } from "../../models/user.model";
import { of } from "rxjs";
describe('Shared Service', () => {
  let mockLoggerService: any;
  let calculatorService: CalculatorService;
  let POSTS: UserModel[];
  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log', 'getAllPosts', 'deletePost']);
    calculatorService = new CalculatorService(mockLoggerService);
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

  it('should give sum of number', () => {
    expect(calculatorService.getAddition(2, 3)).toBe(5);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  })

  it('should give subtraction of number', () => {
    expect(calculatorService.getSubtraction(5, 3)).toBe(2);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  })

})