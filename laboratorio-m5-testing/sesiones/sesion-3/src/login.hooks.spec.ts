import { renderHook, act, waitFor } from '@testing-library/react';
import { useLogin } from './login.hooks';
import { Credential, User } from './model';
import * as api from './api';

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
    expect(result.current.setCredential).toEqual(expect.any(Function));
  });

  it('should update credential when it calls setCredentials', () => {
    // Arrange
    const newCredential: Credential = {
      name: 'admin',
      password: 'test',
    };

    // Act
    const { result } = renderHook(() => useLogin());
    act(() => {
      result.current.setCredential(newCredential);
    });

    // Assert
    expect(result.current.credential).toEqual(newCredential);
  });

  it('should return user equals null and onLogin function', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useLogin());

    // Assert
    expect(result.current.user).toBe(null);
    expect(result.current.onLogin).toEqual(expect.any(Function));
  });

  it('should update user when it sends valid credentials using onLogin', async () => {
    // Arrange
    const adminUser: User = {
      email: 'admin@email.com',
      role: 'admin',
    };
    vi.spyOn(api, 'login').mockResolvedValue(adminUser);

    // Act
    const { result } = renderHook(() => useLogin());
    act(() => {
      result.current.onLogin();
    });

    // Assert
    expect(api.login).toHaveBeenCalled();
    waitFor(() => {
      expect(result.current.user).toEqual(adminUser);
    });
  });
});
