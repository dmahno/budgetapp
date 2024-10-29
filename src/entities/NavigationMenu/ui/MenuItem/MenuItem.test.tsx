import {describe, it, expect} from 'vitest';

import {render, screen} from 'shared/tests/test-utils';

import {MenuItem} from './MenuItem';

describe('MenuItem Component', () => {
  const mockProps = {
    url: '/test-route',
    label: 'Test Label',
  };

  it('renders the link with correct href and label', () => {
    render(<MenuItem url={mockProps.url} label={mockProps.label} />);

    const linkElement = screen.getByRole('link', {name: mockProps.label});
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockProps.url);
  });

  it('applies active class when the route is active', () => {
    render(<MenuItem url={mockProps.url} label={mockProps.label} />, {
      routerProps: {initialEntries: [mockProps.url]},
    });

    const linkElement = screen.getByRole('link', {name: mockProps.label});
    expect(linkElement).toHaveClass('_link_9fe8fa _active_9fe8fa');
  });

  it('applies only link class when the route is inactive', () => {
    render(<MenuItem url={mockProps.url} label={mockProps.label} />, {
      routerProps: {initialEntries: ['/another-route']},
    });

    const linkElement = screen.getByRole('link', {name: mockProps.label});
    expect(linkElement).toHaveClass('_link_9fe8fa');
    expect(linkElement).not.toHaveClass('active');
  });

  it('matches the snapshot', () => {
    const {asFragment} = render(
      <MenuItem url={mockProps.url} label={mockProps.label} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
