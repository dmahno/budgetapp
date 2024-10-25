import {IconComponents} from 'shared/lib';

import styles from './DynamicIcon.module.scss';

type TIconName = keyof typeof IconComponents;

interface IDynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: TIconName;
  size?: number;
}

export const DynamicIcon: React.FC<IDynamicIconProps> = ({
  name,
  size = 24,
  ...props
}) => {
  console.log(IconComponents[name]);
  const IconComponent = IconComponents[name];
  return IconComponent ? (
    <IconComponent
      width={size}
      className={styles.icon}
      height={size}
      {...props}
    />
  ) : null;
};
