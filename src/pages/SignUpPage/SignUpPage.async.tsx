import {lazy} from 'react';

export const SignUpPageLazy = lazy(async () =>
  import('./SignUpPage').then(({SignUpPage}) => ({
    default: SignUpPage,
  })),
);
