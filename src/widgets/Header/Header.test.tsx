import {describe, it, expect} from 'vitest';

import {render, screen} from 'shared/tests/test-utils';

import {Header} from './Header';
import styles from './Header.module.scss';

describe('Header', () => {
  it('renders the header with Logo and UserInfo components', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('header');
    const logoElement = screen.getByTestId('logo-image');
    const userInfoElement = screen.getByTestId('user-info');

    expect(headerElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
    expect(userInfoElement).toBeInTheDocument();
  });

  it('applies the correct header styles', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toHaveClass(styles.header);
  });
  it('matches snapshot', () => {
    const {asFragment} = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
