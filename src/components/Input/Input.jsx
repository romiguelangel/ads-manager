import './Input.css';

const Input = ({
  type = 'text',
  name,
  value,
  label = true,
  onChange,
  readOnly,
}) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{name}</label>}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export { Input };
