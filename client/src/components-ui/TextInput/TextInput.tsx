import React, { useMemo } from 'react';
import createUUID from '../../utils/createUUID';
import s from './TextInput.module.css';

const TextInput = ({
  label,
  placeholder,
}) => {
  const uuid =  useMemo(() => createUUID(), []);
  const inputID = `text-input-${uuid}`;

  // Render
  return (
    <div className={s.root}>
      {!!label && (
        <label htmlFor={inputID}>
          {label}
        </label>
      )}
      <div className={s.wrapper}>
        <input
          id={inputID}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
