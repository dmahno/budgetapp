import {observer} from 'mobx-react-lite';

import {AuthForm} from './ui/AuthForm/AuthForm';

export const Authorization = observer(() => {
  return <AuthForm />;
});
