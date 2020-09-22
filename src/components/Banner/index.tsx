import Button from 'components/Button';

import * as s from './styles';

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'medium'
}: BannerProps) => (
  <s.Container>
    <s.Image src={image} role="img" aria-label={title} />
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <s.Caption>
      <s.Title>{title}</s.Title>
      <s.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="medium">
        {buttonLabel}
      </Button>
    </s.Caption>
  </s.Container>
);

export default Banner;
