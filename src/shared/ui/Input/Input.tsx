import React, {
  useState,
  useEffect,
  InputHTMLAttributes,
  FocusEvent,
} from 'react';
import {observer} from 'mobx-react-lite';

import {Spinner} from 'shared/ui';
import ClearIcon from 'shared/assets/icons/close.svg';
import EyeIcon from 'shared/assets/icons/show.svg';
import HideIcon from 'shared/assets/icons/hide.svg';

import styles from './Input.module.scss';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  clearable?: boolean;
  password?: boolean;
  customSize?: 's' | 'm';
  disabled?: boolean;
  bordered?: boolean;
  showCount?: boolean;
  loading?: boolean;
}

export const Input: React.FC<IInputProps> = observer(
  ({
    label,
    password = false,
    customSize = 'm',
    disabled = false,
    bordered = false,
    showCount = false,
    loading = false,
    clearable = true,
    width = '100%',
    value,
    onChange,
    onFocus,
    onBlur,
    ...props
  }) => {
    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(
      value?.toString() || '',
    );

    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
      setInputValue(value?.toString() || '');
    }, [value]);

    const handleTogglePassword = () => setPasswordVisible(!isPasswordVisible);

    const handleClearInput = () => setInputValue('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      if (onChange) onChange(event);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const shouldLabelBeActive = isFocused || inputValue.length > 0;
    const isActive = isFocused || inputValue.length > 0;

    return (
      <div
        className={`${styles.inputWrapper} ${styles[customSize]} ${
          bordered ? styles.bordered : ''
        } ${disabled ? styles.disabled : ''} ${
          isActive ? styles.hasContent : ''
        }`}
        style={{width}}
      >
        <input
          name={label}
          type={password && !isPasswordVisible ? 'password' : 'text'}
          className={`${styles.inputField} ${
            loading ? styles.loading : ''
          } ${isActive ? styles.focused : ''}`}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
        />
        {label && (
          <label
            className={`${styles.label} ${
              shouldLabelBeActive ? styles.labelActive : ''
            }`}
          >
            {label}
          </label>
        )}

        <div className={styles.inputIcons}>
          {loading && <Spinner size="s" className={styles.loadingIcon} />}
          {clearable && inputValue.length > 0 && (
            <span className={styles.clearIcon} onClick={handleClearInput}>
              <ClearIcon />
            </span>
          )}
          {password && (
            <span
              className={styles.passwordToggle}
              onClick={handleTogglePassword}
            >
              {isPasswordVisible ? <EyeIcon /> : <HideIcon />}
            </span>
          )}
        </div>

        {showCount && (
          <span className={styles.charCount}>
            {inputValue?.toString().length || 0}
          </span>
        )}
      </div>
    );
  },
);
