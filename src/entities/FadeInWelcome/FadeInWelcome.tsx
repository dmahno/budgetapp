import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';

import {getGreetingTime} from './model/lib/getGreetingTime/getGreetingTime';
import styles from './FadeInWelcome.module.scss';

export const FadeInWelcome = observer(() => {
  const {userName, isWelcome} = authStore;

  if (!isWelcome) return null;
  const firstName = userName ? userName.split(' ')[0] : '';

  return (
    <div className={styles.fadeInWelcome}>
      <h1 className={styles.title}>
        {getGreetingTime()}
        {firstName && `, ${firstName}`}! <br /> Входим в приложение.
      </h1>
    </div>
  );
});
