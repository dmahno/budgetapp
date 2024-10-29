import {render, screen, fireEvent} from '@testing-library/react';
import {vi} from 'vitest';

import {TapButton} from './TapButton';
import styles from './TapButton.module.scss';

describe('TapButton Component', () => {
  it('renders with primary appearance by default', () => {
    render(<TapButton text="Primary Button" />);
    const button = screen.getByRole('button', {name: /primary button/i});
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.primary);

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders with secondary appearance when specified', () => {
    render(<TapButton text="Secondary Button" appearance="secondary" />);
    const button = screen.getByRole('button', {name: /secondary button/i});
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.secondary);

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('displays the correct default icon based on appearance', () => {
    const {rerender} = render(<TapButton text="Primary Button" />);
    const addIcon = screen.getByTestId('icon');
    expect(addIcon).toBeInTheDocument();

    rerender(<TapButton text="Secondary Button" appearance="secondary" />);
    const subtractIcon = screen.getByTestId('icon');
    expect(subtractIcon).toBeInTheDocument();
  });

  it('renders a custom icon when provided', () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;
    render(<TapButton text="Custom Icon Button" icon={CustomIcon} />);
    const customIcon = screen.getByTestId('custom-icon');
    expect(customIcon).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    const buttonText = 'Click Me';
    render(<TapButton text={buttonText} />);
    const button = screen.getByRole('button', {name: buttonText});
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
  });

  it('handles onClick events', () => {
    const handleClick = vi.fn();
    render(<TapButton text="Clickable Button" onClick={handleClick} />);
    const button = screen.getByRole('button', {name: /clickable button/i});
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies additional props correctly', () => {
    render(
      <TapButton
        text="Extra Props Button"
        data-testid="extra-props-button"
        disabled
        aria-label="Extra Props"
      />,
    );
    const button = screen.getByTestId('extra-props-button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-label', 'Extra Props');
  });

  it('renders without an icon when none is provided and no default is selected', () => {
    render(<TapButton text="No Icon Button" icon={null} />);
    const icon = screen.queryByTestId('icon');
    expect(icon).not.toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const {asFragment} = render(<TapButton text="Snapshot Button" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
