import {describe, it, expect} from 'vitest';

import {render, screen} from 'shared/tests/test-utils';

import {AimsPage} from './AimsPage';

describe('CategoryPage', () => {
  it('renders without crashing', () => {
    render(<AimsPage />);
    const categoryPageElement = screen.getByText('AimsPage');
    expect(categoryPageElement).toBeInTheDocument();
  });
});
