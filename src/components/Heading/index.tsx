import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'secondary';
  lineLeft?: true | false;
  lineBottom?: true | false;
  size?: 'small' | 'medium' | 'huge';
  lineColor?: LineColorProps;
};

export type LineColorProps = 'primary' | 'secondary';

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
