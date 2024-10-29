import {describe, it, expect} from 'vitest';

import {render, screen} from 'shared/tests/test-utils';

import {Layout} from './Layout';
import styles from './Layout.module.scss';

describe('Layout', () => {
  it('renders the Header component', () => {
    render(<Layout>Test Content</Layout>);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders children inside the main layout', () => {
    render(<Layout>Test Content</Layout>);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveTextContent('Test Content');
  });

  it('applies the correct layout styles', () => {
    render(<Layout>Styled Content</Layout>);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass(styles.layout);
  });

  it('matches snapshot', () => {
    const {asFragment} = render(<Layout>Styled Content</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
