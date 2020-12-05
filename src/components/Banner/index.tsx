import Button from 'components/Button';
import Ribbon, { RibbonSizes } from 'components/Ribbon';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type BannerProps = {
  buttonLabel: string;
  buttonLink: string;
  contentStyle?: ColorStyleProps;
  image: string;
  ribbon?: React.ReactNode;
  ribbonColor?: ColorStyleProps;
  ribbonSize?: RibbonSizes;
  subtitle: string;
  title: string;
};

const Banner = ({
  buttonLabel,
  buttonLink,
  contentStyle = 'primary',
  image,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'medium',
  subtitle,
  title
}: BannerProps) => (
  <s.Wrapper>
    <s.Image src={image} role="img" aria-label={title} />
    {!!ribbon && (
      <Ribbon colorStyle={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <s.Caption>
      <s.Title>{title}</s.Title>
      <s.Subtitle
        dangerouslySetInnerHTML={{ __html: subtitle }}
        highlightColor={contentStyle}
      />
      <Button as="a" href={buttonLink} size="medium" colorStyle={contentStyle}>
        {buttonLabel}
      </Button>
    </s.Caption>
  </s.Wrapper>
);

export default Banner;
