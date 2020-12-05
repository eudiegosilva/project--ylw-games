import { InputHTMLAttributes } from 'react';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  colorStyle?: ColorStyleProps;
  label?: string;
  labelColor?: ColorStyleProps;
  labelFor?: string;
  value?: RadioValue;
  onCheck?: (value?: RadioValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  colorStyle = 'primary',
  label,
  labelColor,
  labelFor = '',
  onCheck,
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };
  return (
    <s.Wrapper>
      <s.Input
        colorStyle={colorStyle}
        id={labelFor}
        onChange={onChange}
        type="radio"
        value={value}
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
