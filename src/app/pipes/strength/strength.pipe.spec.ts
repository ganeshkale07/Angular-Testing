import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let mockStrengthPipe: StrengthPipe;

  beforeEach(() => {
    mockStrengthPipe = new StrengthPipe();
  })

  it('create an instance', () => {
    //arrange
    //These means - create value to varible those we are involved in " create Instance" test case
    //act
    //assign value to varible 
    //assert
    //check the value if variables it is what we were expecting
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be weakest value if less than 5', () => {
    expect(mockStrengthPipe.transform(4)).toEqual('4weakest')
  })

  it('should be weakest value if less than 5', () => {
    expect(mockStrengthPipe.transform(14)).toEqual('14strong')
  })

  it('should be weakest value if less than 5', () => {
    expect(mockStrengthPipe.transform(44)).toEqual('44strongest')
  })
});
