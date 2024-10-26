import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import classNames from 'classnames';

import styles from './ToggleSwitch.module.scss';

type TSwitchSize = 'small' | 'default' | 'large';
type TSwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent,
) => void;
type TSwitchClickEventHandler = (
  checked: boolean,
  event: React.MouseEvent,
) => void;

interface IToggleSwitchProps {
  size?: TSwitchSize;
  className?: string;
  rootClassName?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: TSwitchChangeEventHandler;
  onClick?: TSwitchClickEventHandler;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  title?: string;
  tabIndex?: number;
  id?: string;
}

export const ToggleSwitch: React.FC<IToggleSwitchProps> = observer(
  ({
    size = 'default',
    className,
    rootClassName,
    checked,
    defaultChecked,
    onChange,
    onClick,
    checkedChildren,
    unCheckedChildren,
    disabled,
    loading,
    autoFocus,
    style,
    title,
    tabIndex,
    id,
  }) => {
    const [isChecked, setIsChecked] = useState<boolean>(
      defaultChecked || false,
    );

    useEffect(() => {
      if (typeof checked !== 'undefined') {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleClick = (e: React.MouseEvent) => {
      if (disabled || loading) return;

      const newChecked = !isChecked;
      setIsChecked(newChecked);

      onChange?.(newChecked, e);
      onClick?.(newChecked, e);
    };

    const switchClassNames = classNames(
      rootClassName,
      styles.switch,
      styles[`switch-${size}`],
      {
        [styles['switch-checked']]: isChecked,
        [styles['switch-disabled']]: disabled,
        [styles['switch-loading']]: loading,
      },
      className,
    );

    return (
      <button
        id={id}
        className={switchClassNames}
        style={style}
        onClick={handleClick}
        disabled={disabled}
        autoFocus={autoFocus}
        title={title}
        tabIndex={tabIndex}
      >
        <span className={styles.switch}>
          <span className={styles.slider} />
        </span>
        <span className={styles['switch-inner']}>
          <span className={`${styles.icon} ${styles['icon-light']}`}>
            {unCheckedChildren}
          </span>
          <span className={`${styles.icon} ${styles['icon-dark']}`}>
            {checkedChildren}
          </span>
        </span>
      </button>
    );
  },
);
