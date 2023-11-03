import React from 'react';
import { render } from '@testing-library/react';
import RepositoryList from './RepositoryList';

const repositories = [
  {
    id: 1,
    name: 'repo1',
  },
  {
    id: 2,
    name: 'repo2',
  },
];

test('RepositoryList component renders correctly', () => {
  const { getByText } = render(<RepositoryList repositories={repositories} />);
  const repo1Element = getByText('repo1');
  const repo2Element = getByText('repo2');

  expect(repo1Element).toBeInTheDocument();
  expect(repo2Element).toBeInTheDocument();
});

test('RepositoryList component displays "No Repositories Available" when no repositories are provided', () => {
  const { getByText } = render(<RepositoryList repositories={[]} />);
  const noReposMessage = getByText('No Repositories Available');

  expect(noReposMessage).toBeInTheDocument();
});
