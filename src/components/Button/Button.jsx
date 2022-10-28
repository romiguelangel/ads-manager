import './Button.css';

const Button = ({
  type,
  theme = 'primary',
  size = 'full-width',
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${size} theme-${disabled ? 'disabled' : theme}`}
    >
      {children}
    </button>
  );
};

export { Button };
