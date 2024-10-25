import {RouteProps} from 'react-router-dom';

import {
  MainPage,
  NotFoundPage,
  LoginPage,
  SignUpPage,
  AimsPage,
  CategoryPage,
} from 'pages';
import {
  MAIN_PAGE_LINK,
  SIGNUP_PAGE_LINK,
  LOGIN_PAGE_LINK,
  AIMS_PAGE_LINK,
  CATEGORY_PAGE_LINK,
} from 'shared/constants';

type TRoutes =
  | 'signUpPage'
  | 'mainPage'
  | 'notFound'
  | 'loginPage'
  | 'aimsPage'
  | 'category';

export const RoutePath: Record<TRoutes, string> = {
  notFound: '*',
  mainPage: MAIN_PAGE_LINK,
  loginPage: LOGIN_PAGE_LINK,
  signUpPage: SIGNUP_PAGE_LINK,
  aimsPage: AIMS_PAGE_LINK,
  category: CATEGORY_PAGE_LINK,
};

export const {notFound, mainPage, loginPage, signUpPage, aimsPage, category} =
  RoutePath;

export const routeConfig: Record<
  TRoutes,
  RouteProps & {authorization?: boolean}
> = {
  loginPage: {
    path: loginPage,
    element: <LoginPage />,
    authorization: false,
  },
  signUpPage: {
    path: signUpPage,
    element: <SignUpPage />,
    authorization: false,
  },
  notFound: {
    path: notFound,
    element: <NotFoundPage />,
    authorization: false,
  },
  // Защищенные страницы
  mainPage: {
    path: mainPage,
    element: <MainPage />,
  },
  aimsPage: {
    path: aimsPage,
    element: <AimsPage />,
  },
  category: {
    path: category,
    element: <CategoryPage />,
  },
};
