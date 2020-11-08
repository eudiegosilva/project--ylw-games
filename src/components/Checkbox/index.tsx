import { InputHTMLAttributes, useState } from 'react';
import * as s from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'primary' | 'secondary';
  checkedByDefault?: boolean;
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  checkedByDefault = false,
  value,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(checkedByDefault);

  const onChange = () => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  };

  return (
    <s.CheckboxWrapper>
      <s.CheckboxInput
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
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
