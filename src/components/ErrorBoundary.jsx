import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Error Boundary component to catch and handle React component errors
 * Displays a fallback UI when an error occurs in child components
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console or error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-gray-900 rounded-lg shadow-xl p-8 text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We&apos;re sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 duration-200"
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-white mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="bg-black text-red-400 p-4 rounded overflow-auto text-sm">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
