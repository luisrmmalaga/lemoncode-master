import { renderHook } from '@testing-library/react';
import { useLogin } from './login.hooks';
import { Credential } from './model';

describe('useLogin', () => {
  it('should initialize credential with empty name and password', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLogin());

    // Assert
    const expectedCredential: Credential = {
      name: '',
      password: '',
    };
    expect(result.current.credential).toEqual(expectedCredential);
  });
});
