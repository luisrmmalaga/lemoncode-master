import React from 'react';
import { render, screen } from '@testing-library/react';
import { SayHello } from './say-hello';

describe('SayHello Tests', () => {
  it('should display the person name', () => {
    // Arrange
    const personName = 'John Doe';
    // Act
    render(<SayHello person={personName} />);

    // Assert
    const element = screen.getByRole('heading', {
      level: 1,
      name: `Hello ${personName}`,
    });
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H1');
  });

  it.skip('should display the person name using snapshot testing', () => {
    // Arrange
    const personName = 'John Doe';
    // Act
    const { asFragment } = render(<SayHello person={personName} />);

    // Assert
    // expect(asFragment()).toMatchInlineSnapshot(`
    //   <DocumentFragment>
    //     <h1>
    //       Hello, John Doe!
    //     </h1>
    //   </DocumentFragment>
    // `);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the person name using jest-dom', () => {
    // Arrange
    const personName = 'John Doe';
    // Act
    render(<SayHello person={personName} />);

    // Assert
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
