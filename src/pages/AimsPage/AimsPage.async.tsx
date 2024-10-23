import {lazy} from 'react';

export const AimsPageLazy = lazy(async () =>
  import('./AimsPage').then(({AimsPage}) => ({
    default: AimsPage,
  })),
);
