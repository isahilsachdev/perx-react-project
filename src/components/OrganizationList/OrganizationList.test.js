import React from 'react';
import { render } from '@testing-library/react';
import OrganizationList from './OrganizationList';

const organizations = [
  {
    id: 1,
    login: 'org1',
    description: 'Description 1',
  },
  {
    id: 2,
    login: 'org2',
  },
];

test('OrganizationList component renders correctly', () => {
  const { getByText } = render(<OrganizationList organizations={organizations} />);
  const org1Element = getByText('org1');
  const org2Element = getByText('org2');

  expect(org1Element).toBeInTheDocument();
  expect(org2Element).toBeInTheDocument();
});

test('OrganizationList component displays correct name when available', () => {
  const { getByText } = render(<OrganizationList organizations={organizations} />);
  const OrgName = getByText('org2');

  expect(OrgName).toBeInTheDocument();
});
