import { InputHTMLAttributes, useState } from 'react';
import * as s from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'primary' | 'secondary';
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    if (onCheck) onCheck(status);
  };

  return (
    <s.CheckboxWrapper>
      <s.CheckboxInput
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {label && (
        <s.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </s.Label>
      )}
    </s.CheckboxWrapper>
  );
};

export default Checkbox;
