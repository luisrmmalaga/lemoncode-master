import axios from 'axios';
import { MemberEntity } from '#testing-basics/api-model';
import { getMembers } from './api';

describe('getMembers tests', () => {
  it('should return an array of members when it resolves the request successfully', async () => {
    // Arrange
    const members: MemberEntity[] = [
      {
        id: 1,
        login: 'testuser',
        avatar_url: 'http://example.com/avatar1.png',
      },
    ];
    // stub
    vi.spyOn(axios, 'get').mockResolvedValue({ data: members });

    // Act
    const result = await getMembers();

    // Assert
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/orgs/lemoncode/members'
    );
    expect(result).toEqual(members);
  });

  it('should throw an error with "You have reached the rate limit for this API" when it rejects the request with 403 status code', async () => {
    // Arrange
    // stub
    vi.spyOn(axios, 'get').mockRejectedValue({ response: { status: 403 } });

    // Act
    try {
      await getMembers();
    } catch (error) {
      // Assert
      const expectedError = 'You have reached the rate limit for this API';
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.github.com/orgs/lemoncode/members'
      );
      expect(error).toEqual(expectedError);
    }
  });
});
