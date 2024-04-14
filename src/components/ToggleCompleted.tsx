import React from 'react';

import iconCheck from '../images/icon-check.svg';

type Props = {
  // Props for managing completion status and handling click event
  isCompleted: boolean;
  onClick: React.FormEventHandler<HTMLInputElement>;
};

const ToggleCompleted = ({ isCompleted, onClick }: Props) => {
  // Determine classNames based on completion status
  const labelClass = isCompleted ? 'bg-gradient-to-br from-cyan-400 to-fuchsia-500' : 'bg-gray-300 dark:bg-gray-500';
  const divClass = isCompleted ? 'bg-transparent' : 'bg-white dark:bg-dark-blue';

  // Render the toggle component
  return (
    <label
      className={`${labelClass} h-5 w-5 rounded-full p-px hover:bg-gradient-to-br hover:from-cyan-400 hover:to-fuchsia-500`}
    >
      {/* Inner div for the toggle button */}
      <div className={`${divClass} flex h-full w-full items-center justify-center rounded-full`}>
        {/* Render check icon if completed */}
        {isCompleted && <img src={iconCheck} alt="check" />}
      </div>
      {/* Hidden input for checkbox */}
      <input type="checkbox" checked={isCompleted} className="hidden" onChange={onClick} />
    </label>
  );
};

export default ToggleCompleted;
