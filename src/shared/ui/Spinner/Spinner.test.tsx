import {render} from '@testing-library/react';
import {describe, it, expect} from 'vitest';

import {Spinner} from './Spinner';
import styles from './Spinner.module.scss';

describe('Spinner', () => {
  it('renders with default props', () => {
    const {container} = render(<Spinner />);
    const spinner = container.firstChild;

    expect(spinner).toHaveClass(styles.spinner, styles['m'], styles['light']);
    expect(container).toMatchSnapshot();
  });

  it('renders with custom size "s" and mode "dark"', () => {
    const {container} = render(<Spinner size="s" mode="dark" />);
    const spinner = container.firstChild;

    expect(spinner).toHaveClass(styles.spinner, styles['s'], styles['dark']);
    expect(container).toMatchSnapshot();
  });

  it('renders with custom size "l" and mode "light"', () => {
    const {container} = render(<Spinner size="l" mode="light" />);
    const spinner = container.firstChild;

    expect(spinner).toHaveClass(styles.spinner, styles['l'], styles['light']);
    expect(container).toMatchSnapshot();
  });

  it('applies additional className if provided', () => {
    const {container} = render(<Spinner className="custom-class" />);
    const spinner = container.firstChild;

    expect(spinner).toHaveClass(
      styles.spinner,
      styles['m'],
      styles['light'],
      'custom-class',
    );
    expect(container).toMatchSnapshot();
  });
});
