import {observer} from 'mobx-react-lite';

// import {ImageSlider} from 'entities';

import {AuthForm} from './ui/AuthForm/AuthForm';
import styles from './Authorization.module.scss';

export const Authorization = observer(() => {
  return (
    <div className={styles.authorization}>
      <AuthForm />
      {/* <ImageSlider /> */}
    </div>
  );
});
