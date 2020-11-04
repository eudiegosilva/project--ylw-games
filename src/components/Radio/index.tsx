import { InputHTMLAttributes } from 'react';
import * as s from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  label?: string;
  labelColor?: 'white' | 'primary' | 'secondary';
  labelFor?: string;
  value?: RadioValue;
  onCheck?: (value?: RadioValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  onCheck,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };
  return (
    <s.RadioWrapper>
      <s.RadioInput
        type="radio"
        id={labelFor}
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <s.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </s.Label>
      )}
    </s.RadioWrapper>
  );
};

export default Radio;
