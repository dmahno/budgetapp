import {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {MemoryRouter, MemoryRouterProps} from 'react-router-dom';

interface IRenderOptions extends RenderOptions {
  routerProps?: MemoryRouterProps;
}

export const customRender = (
  children: ReactElement,
  {routerProps, ...renderOptions}: IRenderOptions = {},
) => {
  return render(
    <MemoryRouter {...routerProps}>{children}</MemoryRouter>,
    renderOptions,
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export {customRender as render} from './test-utils';
