import * as s from './styles';

export type ColorStyleProps = 'primary' | 'secondary' | 'alternative' | 'white';

export type HeadingProps = {
  children: React.ReactNode;
  color?: ColorStyleProps;
  lineBottom?: true | false;
  lineColor?: ColorStyleProps;
  lineLeft?: true | false;
  size?: 'small' | 'medium' | 'huge';
};

const Heading = ({
  children,
  color = 'white',
  lineBottom = false,
  lineColor = 'primary',
  lineLeft = false,
  size = 'medium'
}: HeadingProps) => (
  <s.Wrapper
    color={color}
    lineBottom={lineBottom}
    lineColor={lineColor}
    lineLeft={lineLeft}
    size={size}
  >
    {children}
  </s.Wrapper>
);

export default Heading;
