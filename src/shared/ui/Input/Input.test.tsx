import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';

import {Input} from './Input';

describe('Input Component', () => {
  const mockOnChange = vi.fn();
  const mockOnFocus = vi.fn();
  const mockOnBlur = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<Input label="Username" />);
    const inputElement = screen.getByLabelText('Username');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('toggles password visibility when password prop is true', () => {
    render(<Input label="Password" password />);
    const toggleButton = screen.getByTestId('IconToogle');

    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password',
    );

    fireEvent.click(toggleButton);
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password',
    );
  });

  it('clears input value when clearable icon is clicked', () => {
    render(
      <Input
        label="Clearable Input"
        clearable
        value="test"
        onChange={mockOnChange}
      />,
    );
    const clearButton = screen.getByTestId('ClearIcon');

    fireEvent.click(clearButton);
    expect(screen.getByLabelText('Clearable Input')).toHaveValue('');
  });

  it('calls onChange handler when input value changes', () => {
    render(<Input label="Change Input" onChange={mockOnChange} />);
    const inputElement = screen.getByLabelText('Change Input');

    fireEvent.change(inputElement, {target: {value: 'new value'}});
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue('new value');
  });

  it('shows loading indicator when loading prop is true', () => {
    render(<Input label="Loading Input" loading />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('displays character count when showCount prop is true', () => {
    render(<Input label="Character Count Input" showCount value="test" />);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('activates label when input is focused or has value', () => {
    render(<Input label="Focus Label" />);
    const inputElement = screen.getByLabelText('Focus Label');
    const labelElement = screen.getByText('Focus Label');

    expect(labelElement).not.toHaveClass('_label_95237c _labelActive_95237c');

    fireEvent.focus(inputElement);
    expect(labelElement).toHaveClass('_label_95237c _labelActive_95237c');

    fireEvent.change(inputElement, {target: {value: 'value'}});
    fireEvent.blur(inputElement);
    expect(labelElement).toHaveClass('_label_95237c _labelActive_95237c');
  });

  it('disables input when disabled prop is true', () => {
    render(<Input label="Disabled Input" disabled />);
    const inputElement = screen.getByLabelText('Disabled Input');
    expect(inputElement).toBeDisabled();
  });

  it('handles focus and blur events correctly', () => {
    render(
      <Input label="Focus Test" onFocus={mockOnFocus} onBlur={mockOnBlur} />,
    );
    const inputElement = screen.getByLabelText('Focus Test');

    fireEvent.focus(inputElement);
    expect(mockOnFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(inputElement);
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });
});
