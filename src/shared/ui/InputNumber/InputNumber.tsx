import React, {
  ChangeEvent,
  useEffect,
  useState,
  FocusEvent,
  forwardRef,
  useRef,
} from 'react';
import {observer} from 'mobx-react-lite';

import {Spinner} from 'shared/ui';
import ClearIcon from 'shared/assets/icons/close.svg';

import styles from './InputNumber.module.scss';

interface IInputNumberProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'size'
  > {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  bordered?: boolean;
  label: string;
  showCount?: boolean;
  loading?: boolean;
  clearable?: boolean;
  width?: string;
  customSize?: 's' | 'm';
}

export const InputNumber = observer(
  forwardRef<HTMLInputElement, IInputNumberProps>(
    (
      {
        value,
        onChange,
        min = 0,
        max = Infinity,
        disabled = false,
        bordered = false,
        label,
        showCount = false,
        loading = false,
        clearable = true,
        width = '100%',
        customSize = 'm',
        className,
        ...props
      },
      ref,
    ) => {
      const [inputValue, setInputValue] = useState<string>('');
      const [isFocused, setIsFocused] = useState<boolean>(false);

      const inputRef = useRef<HTMLInputElement>(null);
      const combinedRef = ref || inputRef;

      const currencySymbol = '₽';

      useEffect(() => {
        if (!isFocused) {
          setInputValue(formatNumber(value));
        }
      }, [value, isFocused]);

      const formatNumber = (num: number): string => {
        const formatter = new Intl.NumberFormat('ru-RU', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        });
        const formatted = formatter.format(num);
        return formatted + ' ' + currencySymbol;
      };

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;

        // Remove currency symbol and spaces
        val = val.replace(/\s/g, '').replace(currencySymbol, '');

        // Replace comma with dot for decimal point
        val = val.replace(',', '.');

        // Allow only numbers and dot
        if (!/^(\d+(\.\d{0,2})?)?$/.test(val)) {
          return;
        }

        // Parse to number
        const numericValue = parseFloat(val);
        if (isNaN(numericValue)) {
          onChange(0);
          setInputValue(isFocused ? currencySymbol : '0 ' + currencySymbol);
        } else {
          if (numericValue < min || numericValue > max) {
            return;
          }
          onChange(numericValue);
          setInputValue(
            isFocused ? val + ' ' + currencySymbol : formatNumber(numericValue),
          );
        }
      };

      const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        let val = inputValue.replace(/\s/g, '').replace(currencySymbol, '');
        if (val === '0') {
          val = '';
        }
        setInputValue(val + ' ' + currencySymbol);
        e.target.select(); // Select all text on focus
      };

      const handleBlur = () => {
        setIsFocused(false);
        const numericValue = parseFloat(
          inputValue
            .replace(/\s/g, '')
            .replace(currencySymbol, '')
            .replace(',', '.'),
        );
        if (isNaN(numericValue)) {
          onChange(0);
          setInputValue('0 ' + currencySymbol);
        } else {
          setInputValue(formatNumber(numericValue));
        }
      };

      const handleClear = () => {
        onChange(0);
        setInputValue(isFocused ? currencySymbol : '0 ' + currencySymbol);
        // No need to unset the ref
      };

      const shouldLabelBeActive =
        isFocused || (inputValue && inputValue.trim() !== '');
      const inputId = `${label}-input-number`;

      return (
        <div
          className={`${styles.inputWrapper} ${styles[customSize]} ${
            bordered ? styles.bordered : ''
          } ${disabled ? styles.disabled : ''} ${
            shouldLabelBeActive ? styles.hasContent : ''
          }`}
          style={{width}}
        >
          <input
            ref={combinedRef as React.RefObject<HTMLInputElement>}
            id={inputId}
            name={label}
            type="text"
            className={`${styles.inputField} ${loading ? styles.loading : ''} ${
              shouldLabelBeActive ? styles.focused : ''
            } ${className || ''}`}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            {...props}
          />
          {label && (
            <label
              htmlFor={inputId}
              className={`${styles.label} ${
                shouldLabelBeActive ? styles.labelActive : ''
              }`}
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
            {clearable && inputValue && inputValue.trim() !== '' && (
              <span
                data-testid="ClearIcon"
                className={styles.clearIcon}
                onClick={handleClear}
                aria-label="Clear input"
              >
                <ClearIcon />
              </span>
            )}
          </div>
          {showCount && (
            <span className={styles.charCount}>
              {inputValue.replace(/\s/g, '').replace(currencySymbol, '').length}
            </span>
          )}
        </div>
      );
    },
  ),
);
