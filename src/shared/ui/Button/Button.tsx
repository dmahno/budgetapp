import React, {ReactNode, MouseEventHandler, ElementType} from 'react';
import classNames from 'classnames';

import {Spinner} from 'shared/ui';

import styles from './Button.module.scss';

type TButtonSizes = 's' | 'm' | 'l';
type TButtonAppearances = 'primary' | 'secondary' | 'thirdly';
type TButtonWidths = 'auto' | 'full' | string;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  name?: string;
  children?: ReactNode | ReactNode[];
  disabled?: boolean;
  as?: ElementType;
  className?: string;
  loading?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: TButtonSizes;
  appearance?: TButtonAppearances;
  width?: TButtonWidths;
}

export const Button: React.FC<IButtonProps> = ({
  id,
  name,
  children,
  disabled = false,
  as: Component = 'button',
  className,
  loading = false,
  icon,
  iconAlign = 'left',
  onClick,
  size = 'm',
  appearance = 'primary',
  width = 'auto',
  ...props
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[`size-${size}`],
    styles[`appearance-${appearance}`],
    {
      [styles.loading]: loading,
      [styles.disabled]: disabled,
      [styles.fullWidth]: width === 'full',
    },
    className,
  );

  const buttonStyle =
    width !== 'full' && width !== 'auto' ? {width} : undefined;

  return (
    <Component
      id={id}
      name={name}
      className={buttonClass}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      style={buttonStyle}
      {...props}
    >
      {loading ? (
        <Spinner size="s" mode="dark" data-testid="spinner" />
      ) : (
        <>
          {icon && iconAlign === 'left' && (
            <span data-testid="icon" className={styles.icon}>
              {icon}
            </span>
          )}
          {children}
          {icon && iconAlign === 'right' && (
            <span data-testid="icon" className={styles.icon}>
              {icon}
            </span>
          )}
        </>
      )}
    </Component>
  );
};
