import {lazy} from 'react';

export const NotFoundPageLazy = lazy(async () =>
  import('./NotFoundPage').then(({NotFoundPage}) => ({
    default: NotFoundPage,
  })),
);
