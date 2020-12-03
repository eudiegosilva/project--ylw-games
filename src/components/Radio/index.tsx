import { InputHTMLAttributes } from 'react';

import * as s from './styles';

export type ColorStyleProps = 'primary' | 'secondary' | 'alternative';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  label?: string;
  labelColor?: 'white' | 'primary' | 'secondary' | 'alternative';
  colorStyle?: ColorStyleProps;
  labelFor?: string;
  value?: RadioValue;
  onCheck?: (value?: RadioValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  labelFor = '',
  labelColor,
  colorStyle = 'primary',
  value,
  onCheck,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };
  return (
    <s.Wrapper>
      <s.Input
        type="radio"
        id={labelFor}
        value={value}
        colorStyle={colorStyle}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <s.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </s.Label>
      )}
    </s.Wrapper>
  );
};

export default Radio;
