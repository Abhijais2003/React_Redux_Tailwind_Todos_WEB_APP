import React from 'react';
import { RadioContext } from '../contexts';

// Define props for the RadioGroup component
type Props = RadioContextType & {
  // Children elements to be wrapped within the RadioContext.Provider
  children: React.ReactNode;
};

const RadioGroup = ({ name, checkedValue, children, onChange }: Props) => {
  // Render the RadioContext.Provider and pass the context values to its children
  return <RadioContext.Provider value={{ name, checkedValue, onChange }}>{children}</RadioContext.Provider>;
};

export default RadioGroup;
