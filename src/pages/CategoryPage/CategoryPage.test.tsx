import {describe, it, expect} from 'vitest';

import {render, screen} from 'shared/tests/test-utils';

import {CategoryPage} from './CategoryPage';

describe('CategoryPage', () => {
  it('renders without crashing', () => {
    render(<CategoryPage />);
    const categoryPageElement = screen.getByText('CategoryPage');
    expect(categoryPageElement).toBeInTheDocument();
  });
});
