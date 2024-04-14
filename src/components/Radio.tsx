import React, { useContext } from 'react';
import { RadioContext } from '../contexts';

// Define props for the Radio component
type Props = {
  // Value for the radio button
  radioValue: string;
  // Props for the label element
} & React.ComponentPropsWithoutRef<'label'>;

const Radio = ({ radioValue, children, ...labelProps }: Props) => {
  // Access radio context to get name, checkedValue, and onChange function
  const { name, checkedValue, onChange } = useContext(RadioContext);

  // Render the radio button with its label
  return (
    <label {...labelProps}>
      {/* Render children inside the label */}
      {children}
      {/* Input element representing the radio button */}
      <input
        type="radio"
        // Hide the actual radio button visually
        className="hidden"
        // Set name and value for the radio button
        name={name}
        value={radioValue}
        // Set checked state based on the context's checkedValue
        checked={checkedValue === radioValue}
        // Call onChange function from the context when radio button state changes
        onChange={onChange}
      />
    </label>
  );
};

export default Radio;
