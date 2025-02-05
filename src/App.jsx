import React from 'react';
import RoutesComponent from './router/index';  
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
      <ThemeProvider>
        <RoutesComponent />
      </ThemeProvider>
    
  );
}

export default App;
