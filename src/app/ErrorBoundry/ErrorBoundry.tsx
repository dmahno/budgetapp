import {Component, ErrorInfo, ReactNode} from 'react';
interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(): IState {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({error});
  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;

    if (hasError) {
      return <div>{`${error?.toString()} `} </div>;
    }

    return children;
  }
}

export default ErrorBoundary;
