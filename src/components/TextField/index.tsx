import { InputHTMLAttributes, useState } from 'react';

import * as s from './styles';

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
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
        <s.Input type="text" onChange={onChange} value={value} {...props} />
      </s.InputWrapper>
    </s.TextFieldWrapper>
  );
};

export default TextField;
