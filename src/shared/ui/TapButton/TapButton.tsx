import React from 'react';

import AddIcon from 'shared/assets/icons/add.svg';
import SubtractIcon from 'shared/assets/icons/totalAmount.svg';

import styles from './TapButton.module.scss';

interface ITapButtonProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  appearance?: 'primary' | 'secondary';
}

export const TapButton: React.FC<ITapButtonProps> = ({
  icon: Icon,
  text,
  onClick,
  disabled,
  appearance = 'primary',
  ...props
}) => {
  const DefaultIcon =
    Icon !== undefined
      ? Icon
      : appearance === 'primary'
        ? AddIcon
        : SubtractIcon;

  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${styles[appearance]}`}
      onClick={onClick}
      {...props}
    >
      {DefaultIcon && (
        <div className={styles.iconWrapper}>
          <DefaultIcon data-testid="icon" />
        </div>
      )}
      <div className={styles.textWrapper}>{text}</div>
    </button>
  );
};
