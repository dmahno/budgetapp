import {describe, it, expect} from 'vitest';

import {render, screen} from 'shared/tests/test-utils';

import {Logo} from './Logo';

describe('Logo', () => {
  it('renders with the correct link and class', () => {
    const {container} = render(<Logo />);

    const logoImage = screen.getByTestId('logo-image');
    expect(logoImage).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
