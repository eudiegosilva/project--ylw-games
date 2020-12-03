import * as s from './styles';

export type LineColorProps = 'primary' | 'secondary' | 'alternative';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'secondary' | 'alternative';
  lineLeft?: true | false;
  lineBottom?: true | false;
  size?: 'small' | 'medium' | 'huge';
  lineColor?: LineColorProps;
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <s.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </s.Wrapper>
);

export default Heading;
