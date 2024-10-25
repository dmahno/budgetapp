import {
  AIMS_PAGE_LINK,
  CATEGORY_PAGE_LINK,
  MAIN_PAGE_LINK,
} from 'shared/constants';

export interface IMenuLinksProps {
  label: string;
  url: string;
}

export const menuLinks: IMenuLinksProps[] = [
  {
    label: 'Главная',
    url: MAIN_PAGE_LINK,
  },
  {
    label: 'Ваши цели',
    url: AIMS_PAGE_LINK,
  },
  {
    label: 'Категории',
    url: CATEGORY_PAGE_LINK,
  },
];
