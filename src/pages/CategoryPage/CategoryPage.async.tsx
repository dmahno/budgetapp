import {lazy} from 'react';

export const CategoryPageLazy = lazy(async () =>
  import('./CategoryPage').then(({CategoryPage}) => ({
    default: CategoryPage,
  })),
);
