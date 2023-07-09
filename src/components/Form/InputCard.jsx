import { useState, useEffect } from 'react';

export default function InputCard({
  next,
  previous,
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
      <div className="flex mt-8 items-center justify-between w-full">
        <button onClick={previous} className="btn">
          Back
        </button>
        <button
          disabled={disabled && required}
          onClick={next}
          className="btn btn-accent"
        >
          Next
        </button>
      </div>
    </div>
  );
}
