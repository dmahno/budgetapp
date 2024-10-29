import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';

import LogoImage from 'shared/assets/logo.svg';

import {Button} from './Button';
import styles from './Button.module.scss';

describe('Button', () => {
  it('renders with default props', () => {
    const {container} = render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      styles.button,
      styles['size-m'],
      styles['appearance-primary'],
    );
    expect(button).toHaveTextContent('Click Me');
    expect(container).toMatchSnapshot();
  });

  it('renders with a custom size and appearance', () => {
    render(
      <Button size="l" appearance="secondary">
        Custom Button
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      styles.button,
      styles['size-l'],
      styles['appearance-secondary'],
    );
    expect(button).toHaveTextContent('Custom Button');
  });

  it('renders with full width', () => {
    render(<Button width="full">Full Width Button</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass(styles.fullWidth);
  });

  it('applies custom width style', () => {
    render(<Button width="200px">Custom Width Button</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({width: '200px'});
  });

  it('renders with a loading spinner when loading is true', () => {
    render(<Button loading>Loading Button</Button>);
    const spinner = screen.getByTestId('spinner');

    expect(spinner).toBeInTheDocument();
  });

  it('renders with an icon aligned to the left', () => {
    render(
      <Button icon={<LogoImage />} iconAlign="left">
        Button with Icon
      </Button>,
    );

    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.nextSibling).toHaveTextContent('Button with Icon');
  });

  it('renders with an icon aligned to the right', () => {
    render(
      <Button icon={<LogoImage />} iconAlign="right">
        Button with Icon
      </Button>,
    );

    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.previousSibling).toHaveTextContent('Button with Icon');
  });

  it('triggers onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with disabled style and prevents clicks when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveClass(styles.disabled);
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
