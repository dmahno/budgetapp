import {describe, it, expect, vi, beforeEach} from 'vitest';

import {render, screen, fireEvent} from 'shared/tests/test-utils';

import {ReactRouterCustomLink} from './ReactRouterCustomLink';

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom',
    );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockNavigate = vi.fn();
const mockOnClick = vi.fn();

describe('ReactRouterCustomLink', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockOnClick.mockClear();
  });

  it('renders correctly with default props', () => {
    render(<ReactRouterCustomLink to="/test">Test Link</ReactRouterCustomLink>);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle({color: 'rgb(9, 88, 217)'});
  });

  //TODO нужно сделать disable
  //   it('applies style when disableAntColor is true', () => {
  //     render(
  //       <ReactRouterCustomLink to="/test" disableAntColor>
  //         Styled Link
  //       </ReactRouterCustomLink>,
  //     );
  //     const linkElement = screen.getByText('Styled Link');
  //     expect(linkElement).toHaveStyle({color: 'inherit', textDecoration: 'none'});
  //   });

  it('calls navigate function on click', () => {
    render(
      <ReactRouterCustomLink to="/navigate-test">
        Navigate Link
      </ReactRouterCustomLink>,
    );
    const linkElement = screen.getByText('Navigate Link');
    fireEvent.click(linkElement);
    expect(mockNavigate).toHaveBeenCalledWith('/navigate-test');
  });

  it('prevents navigation on modified event', () => {
    render(
      <ReactRouterCustomLink to="/navigate-test">
        Modified Event Link
      </ReactRouterCustomLink>,
    );
    const linkElement = screen.getByText('Modified Event Link');
    fireEvent.click(linkElement, {ctrlKey: true});
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('calls onClick and then navigates if not prevented', () => {
    render(
      <ReactRouterCustomLink to="/click-test" onClick={mockOnClick}>
        Clickable Link
      </ReactRouterCustomLink>,
    );
    const linkElement = screen.getByText('Clickable Link');
    fireEvent.click(linkElement);
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/click-test');
  });
  it('matches the snapshot', () => {
    const {asFragment} = render(<ReactRouterCustomLink to="/click-test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
