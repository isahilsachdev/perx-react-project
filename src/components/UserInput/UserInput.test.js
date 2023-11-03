import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserInput from './UserInput';

test('UserInput component renders correctly', () => {
  const { getByPlaceholderText, getByText } = render(<UserInput />);
  const inputElement = getByPlaceholderText('Enter GitHub Username');
  const buttonElement = getByText('Search');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('UserInput component handles input and button click', () => {
  const handleUserSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(<UserInput onUserSubmit={handleUserSubmit} />);

  const inputElement = getByPlaceholderText('Enter GitHub Username');
  const buttonElement = getByText('Search');

  fireEvent.change(inputElement, { target: { value: 'testuser' } });
  fireEvent.click(buttonElement);

  expect(handleUserSubmit).toHaveBeenCalledTimes(1);
  expect(handleUserSubmit).toHaveBeenCalledWith('testuser');
});
