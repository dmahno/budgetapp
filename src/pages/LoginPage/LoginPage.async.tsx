import {lazy} from 'react';

export const LoginPageLazy = lazy(async () =>
  import('./LoginPage').then(({LoginPage}) => ({
    default: LoginPage,
  })),
);
