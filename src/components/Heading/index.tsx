import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'black' | 'white';
  lineLeft?: true | false;
  lineBottom?: true | false;
  size?: 'small' | 'medium';
  lineColor?: LineColorProps;
};

export type LineColorProps = 'primary' | 'secondary';

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <s.Container
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </s.Container>
);

export default Heading;
