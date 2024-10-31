import React, {
  InputHTMLAttributes,
  FocusEvent,
  useState,
  forwardRef,
  useCallback,
  useId,
} from 'react';
import {observer} from 'mobx-react-lite';
import classNames from 'classnames';

import {Spinner} from 'shared/ui';
import ClearIcon from 'shared/assets/icons/close.svg';
import EyeIcon from 'shared/assets/icons/show.svg';
import HideIcon from 'shared/assets/icons/hide.svg';

import styles from './Input.module.scss';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label: string;
  clearable?: boolean;
  password?: boolean;
  size?: 's' | 'm';
  disabled?: boolean;
  bordered?: boolean;
  showCount?: boolean;
  loading?: boolean;
  width?: string;
  type?: 'text' | 'password';
  onClear?: () => void;
}

export const Input = observer(
  forwardRef<HTMLInputElement, IInputProps>(
    (
      {
        label,
        password = false,
        size = 'm',
        disabled = false,
        bordered = false,
        showCount = false,
        loading = false,
        clearable = true,
        width = '100%',
        type = 'text',
        value,
        onChange,
        onFocus,
        onBlur,
        onClear,
        ...props
      },
      ref,
    ) => {
      const [isPasswordVisible, setPasswordVisible] = useState(false);
      const [isFocused, setIsFocused] = useState(false);
      const id = useId();

      const inputId = `${label}-${id}`;

      const handleTogglePassword = useCallback(() => {
        setPasswordVisible((prev) => !prev);
      }, []);

      const handleClearInput = useCallback(() => {
        if (onClear) {
          onClear();
        } else if (onChange) {
          const event = {
            target: {value: ''},
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
      }, [onClear, onChange]);

      const handleFocus = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          if (onFocus) onFocus(e);
        },
        [onFocus],
      );

      const handleBlur = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        },
        [onBlur],
      );

      const actualType = password
        ? isPasswordVisible
          ? 'text'
          : 'password'
        : type;

      const hasValue = value != null && value.toString().length > 0;
      const isActive = isFocused || hasValue;

      return (
        <div
          className={classNames(styles.inputWrapper, styles[size], {
            [styles.bordered]: bordered,
            [styles.disabled]: disabled,
            [styles.hasContent]: isActive,
          })}
          style={{width}}
        >
          <input
            ref={ref}
            id={inputId}
            name={label}
            type={actualType}
            className={classNames(styles.inputField, {
              [styles.loading]: loading,
              [styles.focused]: isActive,
            })}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            {...props}
          />
          {label && (
            <label
              htmlFor={inputId}
              className={classNames(styles.label, {
                [styles.labelActive]: isActive,
              })}
            >
              {label}
            </label>
          )}
          <div className={styles.inputIcons}>
            {loading && (
              <Spinner
                size="s"
                data-testid="spinner"
                className={styles.loadingIcon}
              />
            )}
            {clearable && hasValue && (
              <span
                data-testid="ClearIcon"
                className={styles.clearIcon}
                onClick={handleClearInput}
                aria-label="Clear input"
              >
                <ClearIcon />
              </span>
            )}
            {password && (
              <span
                data-testid="IconToggle"
                className={styles.passwordToggle}
                onClick={handleTogglePassword}
                aria-label="Toggle password visibility"
              >
                {isPasswordVisible ? <EyeIcon /> : <HideIcon />}
              </span>
            )}
          </div>
          {showCount && (
            <span className={styles.charCount}>
              {value ? value.toString().length : 0}
            </span>
          )}
        </div>
      );
    },
  ),
);
