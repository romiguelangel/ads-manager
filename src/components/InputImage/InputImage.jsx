import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import './InputImage.css';

const InputImage = ({
  name,
  value,
  label,
  onChange,
  onSave,
  onRemove,
  readOnly,
}) => {
  return (
    <div className="input-image">
      <Input
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        readOnly={readOnly}
      />

      <div className="actions">
        <Button onClick={onSave} disabled={!onSave}>
          Save
        </Button>

        <Button onClick={onRemove} theme="secondary" disabled={!onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export { InputImage };
