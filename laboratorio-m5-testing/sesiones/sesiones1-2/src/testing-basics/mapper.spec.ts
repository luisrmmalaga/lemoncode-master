import * as am from './api-model';
import * as vm from './view-model';
import { mapMembersApiToViewModel } from './mapper';

describe('Mapper Tests', () => {
  it.each<{ members: am.MemberEntity[] }>([
    { members: undefined },
    { members: null },
    { members: [] },
  ])('should return an empty array from $members', ({ members }) => {
    // Act
    const result = mapMembersApiToViewModel(members);
    // Assert
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

  it('should return array one mapped item when it feed array with one item', () => {
    // Arrange
    const members: am.MemberEntity[] = [
      { id: 1, login: 'test login', avatar_url: 'test avatar' },
    ];

    // Act
    const result = mapMembersApiToViewModel(members);
    // Assert
    const expectedResult: vm.MemberEntity[] = [
      {
        id: '1',
        login: 'test login',
        avatarUrl: 'test avatar',
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
