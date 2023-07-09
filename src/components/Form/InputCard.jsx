import { useState, useEffect } from 'react';

export default function InputCard({
  onClick,
  title,
  placeholder,
  value,
  setValue,
  text,
  required,
}) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (value === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [value]);

  return (
    <div className="max-w-md">
      <h1 className="text-5xl font-bold mb-16">{title}</h1>
      <div className="flex items-center justify-between w-full">
        {text ? (
          <input
            className="input text-xl input-ghost w-full max-w-xs"
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={setValue}
          />
        ) : (
          <input
            className="input text-xl input-ghost w-full max-w-xs"
            placeholder="5"
            min={0}
            max={5}
            type="number"
            value={value}
            onChange={setValue}
          />
        )}
        <button
          disabled={disabled && required}
          onClick={onClick}
          className="btn btn-accent"
        >
          Next
        </button>
      </div>
    </div>
  );
}
