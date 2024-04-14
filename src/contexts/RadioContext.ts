import React from 'react';

// Define a default context object
const defaultContext: RadioContextType = {
  name: 'radio', // Default name for radio inputs
  checkedValue: 'checked value', // Default checked value
  onChange: () => {
    return; // Default onChange handler
  },
};

// Create a context using React.createContext
const RadioContext = React.createContext<RadioContextType>(defaultContext);

// Export the context for use in other components
export default RadioContext;
