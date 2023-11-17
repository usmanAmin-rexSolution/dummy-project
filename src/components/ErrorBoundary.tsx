import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text } from 'react-native';
import H3 from './H3';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state to indicate an error has occurred.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can log the error to an error reporting service
        console.error('Error caught by error boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <H3 text='Something went wrong!' />
                </View>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
