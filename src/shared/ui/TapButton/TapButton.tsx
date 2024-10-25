import Add from 'shared/assets/icons/add.svg';
import Subtract from 'shared/assets/icons/totalAmount.svg';

import styles from './TapButton.module.scss';

interface ITapButtonProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  onClick?: () => void;
  appearance?: 'primary' | 'secondary';
}

export const TapButton: React.FC<ITapButtonProps> = ({
  icon,
  text,
  onClick,
  appearance = 'primary',
  ...props
}) => {
  const Icon = icon || (appearance === 'primary' ? Add : Subtract);

  return (
    <button
      className={`${styles.button} ${styles[appearance]}`}
      onClick={onClick}
      {...props}
    >
      <div className={styles.iconWrapper}>{Icon && <Icon />}</div>
      <div className={styles.textWrapper}>{text}</div>
    </button>
  );
};
