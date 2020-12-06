import { InputHTMLAttributes, useState } from 'react';

import * as s from './styles';

export type TextFieldProps = {
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  disabled = false,
  error,
  icon,
  iconPosition = 'left',
  initialValue = '',
  label,
  name,
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
    <s.Wrapper disabled={disabled} error={!!error}>
      {!!label && <s.Label htmlFor={name}>{label}</s.Label>}
      <s.InputWrapper>
        {!!icon && (
          <s.IconWrapper iconPosition={iconPosition}>{icon}</s.IconWrapper>
        )}
        <s.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </s.InputWrapper>
      {!!error && <s.Error>{error}</s.Error>}
    </s.Wrapper>
  );
};

export default TextField;
