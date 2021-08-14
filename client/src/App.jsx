import React from 'react';
import ErrorBoundary from './hoc/ErrorBoundary';
import TickerWidget from './pages/TickerWidget';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <ErrorBoundary>
        <TickerWidget />
      </ErrorBoundary>
    </div>
  );
}

export default App;
