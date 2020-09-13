import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'black' | 'white';
  lineLeft?: true | false;
  lineBottom?: true | false;
};

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <s.Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </s.Container>
);

export default Heading;
