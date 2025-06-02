import React from 'react';
import { Route, HashRouter, Routes } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NameCollection } from './name-collection';
import * as api from './name-api';
import { UserEdit } from './user-edit';

const renderWithRouter = (component) => {
  return render(
    <HashRouter>
      <Routes>
        <Route path="/" element={component} />
        <Route path="/user/:name" element={<UserEdit />} />
      </Routes>
    </HashRouter>
  );
};

describe('NameCollection component Tests', async () => {
  it('should display a list with one item when it mounts the component and it resolves the async call', async () => {
    // Arrange
    vi.spyOn(api, 'getNameCollection').mockResolvedValue(['John Doe']);

    // Act
    renderWithRouter(<NameCollection />);

    const itemsBeforeWait = screen.queryAllByRole('listitem');
    expect(itemsBeforeWait).toHaveLength(0);

    // Assert
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(1);
    expect(api.getNameCollection).toHaveBeenCalled();
  });

  it('should remove no data description when it mounts the component and it resolves the async call', async () => {
    // Arrange
    vi.spyOn(api, 'getNameCollection').mockResolvedValue(['John Doe']);

    // Act
    renderWithRouter(<NameCollection />);

    // Assert
    expect(screen.queryByText('No data')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('No data')).not.toBeInTheDocument();
    });
  });

  it('should navigate to first user edit page when click in first user', async () => {
    // Arrange
    vi.spyOn(api, 'getNameCollection').mockResolvedValue([
      'John Doe',
      'Jane Doe',
    ]);

    // Act
    renderWithRouter(<NameCollection />);

    // Assert
    const [firstItem, secondItem] = await screen.findAllByRole('link');
    screen.debug();
    await userEvent.click(firstItem);
    screen.debug();
    const userEditElement = screen.getByRole('heading', {
      name: 'User name: John Doe',
    });

    expect(userEditElement).toBeInTheDocument();
  });
});
