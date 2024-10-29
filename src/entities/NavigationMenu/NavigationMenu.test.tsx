import {render, screen} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {MemoryRouter} from 'react-router-dom';

import {NavigationMenu} from './NavigationMenu';

vi.mock('./model/data/menuLinks', () => ({
  menuLinks: [
    {url: '/home', label: 'Home'},
    {url: '/about', label: 'About'},
    {url: '/contact', label: 'Contact'},
  ],
}));

describe('NavigationMenu Component', () => {
  it('renders the correct number of menu items', () => {
    render(
      <MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>,
    );
    const menuItems = screen.getAllByRole('link');
    expect(menuItems).toHaveLength(3);
  });

  it('renders each menu item with correct label and href', () => {
    render(
      <MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>,
    );
    const menuLinks = [
      {label: 'Home', href: '/home'},
      {label: 'About', href: '/about'},
      {label: 'Contact', href: '/contact'},
    ];

    menuLinks.forEach(({label, href}) => {
      const linkElement = screen.getByRole('link', {name: label});
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', href);
    });
  });

  it('matches the snapshot', () => {
    const {asFragment} = render(
      <MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
