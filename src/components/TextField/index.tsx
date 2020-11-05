import { InputHTMLAttributes, useState } from 'react';

import * as s from './styles';

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
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
    <s.TextFieldWrapper disabled={disabled} error={!!error}>
      {!!label && <s.Label htmlFor={labelFor}>{label}</s.Label>}
      <s.InputWrapper>
        {!!icon && <s.Icon iconPosition={iconPosition}>{icon}</s.Icon>}
        <s.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </s.InputWrapper>
      {!!error && <s.Error>{error}</s.Error>}
    </s.TextFieldWrapper>
  );
};

export default TextField;
