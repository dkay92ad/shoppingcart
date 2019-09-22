import React, { Component } from 'react';
import './ErrorBoundaryComponent.css';

class ErrorBoundaryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        if (process.env.NODE_ENV === 'development') {
          console.log(info);
        }
        //process.env.NODE_ENV = 'production'
        console.log(process.env.NODE_ENV);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
          return (
            <div>
              <h3>
                We encountered a problem while loading the Shopping App.
              </h3>
              <h5>
                We sincerely regret the inconvenience caused.
              </h5>
            </div>
          );
        }
    
        return this.props.children; 
      }
}

export default ErrorBoundaryComponent;