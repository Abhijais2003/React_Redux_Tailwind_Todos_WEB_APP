import React from 'react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

type Props = {
  checkedValue: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
};

const FilterRow = ({ checkedValue, onChange }: Props) => {
  return (
    // RadioGroup component wraps the Radio components to manage their state
    <RadioGroup name="filter" checkedValue={checkedValue} onChange={onChange}>
      {/* Radio component for 'all' filter */}
      <Radio
        // Conditional classNames to apply styles based on checkedValue
        className={`${checkedValue === 'all' ? 'text-sky-600 dark:text-blue-500' : ''
          } hover:text-black dark:hover:text-white`}
        // Value for 'all' filter
        radioValue="all"
      >
        all
      </Radio>
      {/* Radio component for 'active' filter */}
      <Radio
        className={`${checkedValue === 'active' ? 'text-sky-600 dark:text-blue-500' : ''
          } hover:text-black dark:hover:text-white`}
        radioValue="active"
      >
        active
      </Radio>
      {/* Radio component for 'completed' filter */}
      <Radio
        className={`${checkedValue === 'completed' ? 'text-sky-600 dark:text-blue-500' : ''
          } hover:text-black dark:hover:text-white`}
        radioValue="completed"
      >
        completed
      </Radio>
    </RadioGroup>
  );
};

export default FilterRow;
