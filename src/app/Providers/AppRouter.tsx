import {Suspense} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {routeConfig} from 'app/Routes/routes';
import {NotFoundPage} from 'pages';
import {
  SIGNUP_PAGE_LINK,
  MAIN_PAGE_LINK,
  LOGIN_PAGE_LINK,
} from 'shared/constants';
import {Layout} from 'widgets';

export const AppRouter = observer(() => {
  const {isAuthenticated} = authStore;

  return (
    <Suspense fallback={<></>}>
      <Routes>
        {Object.values(routeConfig).map((route) => {
          const {element, path, authorization = true} = route;

          if (
            !authorization &&
            !isAuthenticated &&
            (path === LOGIN_PAGE_LINK || path === SIGNUP_PAGE_LINK)
          ) {
            return <Route key={path} path={path} element={element} />;
          }

          if (authorization && !isAuthenticated) {
            return (
              <Route
                key={path}
                path={path}
                element={<Navigate to={LOGIN_PAGE_LINK} replace />}
              />
            );
          }

          if (
            isAuthenticated &&
            (path === SIGNUP_PAGE_LINK || path === LOGIN_PAGE_LINK)
          ) {
            return (
              <Route
                key={path}
                path={path}
                element={<Navigate to={MAIN_PAGE_LINK} replace />}
              />
            );
          }

          if (authorization) {
            return (
              <Route
                key={path}
                path={path}
                element={<Layout>{element}</Layout>}
              />
            );
          }

          return null;
        })}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
});
