import React from 'react';
import classNames from 'classnames';

import styles from './Spinner.module.scss';

type TSpinnerSize = 's' | 'm' | 'l';
type TSpinnerMode = 'light' | 'dark';

interface ISpinnerProps {
  size: TSpinnerSize;
  mode: TSpinnerMode;
  className?: string;
}

export const Spinner: React.FC<Partial<ISpinnerProps>> = ({
  size = 'm',
  mode = 'light',
  className,
}) => {
  return (
    <div
      data-testid="spinner"
      className={classNames(
        styles.spinner,
        styles[size],
        styles[mode],
        className,
      )}
    />
  );
};
