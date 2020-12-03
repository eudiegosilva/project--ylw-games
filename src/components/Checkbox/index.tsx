import { InputHTMLAttributes, useState } from 'react';

import * as s from './styles';

export type ColorStyleProps = 'primary' | 'secondary' | 'alternative' | 'white';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: ColorStyleProps;
  colorStyle?: ColorStyleProps;
  checkedByDefault?: boolean;
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  colorStyle = 'primary',
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
    <s.Wrapper>
      <s.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        colorStyle={colorStyle}
        value={value}
        {...props}
      />
      {label && (
        <s.Label htmlFor={labelFor} colorStyle={labelColor}>
          {label}
        </s.Label>
      )}
    </s.Wrapper>
  );
};

export default Checkbox;
