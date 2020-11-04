import { InputHTMLAttributes, useState } from 'react';

import * as s from './styles';

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition: 'left' | 'right';
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <s.TextFieldWrapper>
      {!!label && <s.Label htmlFor={labelFor}>{label}</s.Label>}
      <s.InputWrapper>
        {!!icon && iconPosition === 'left' && <s.Icon>{icon}</s.Icon>}
        <s.Input type="text" onChange={onChange} value={value} {...props} />
        {!!icon && iconPosition === 'right' && <s.Icon>{icon}</s.Icon>}
      </s.InputWrapper>
    </s.TextFieldWrapper>
  );
};

export default TextField;
