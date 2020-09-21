import Button from 'components/Button';
import * as s from './styles';

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <s.Container>
    <s.Image src={image} role="img" aria-label={title} />
    <s.Caption>
      <s.Title>{title}</s.Title>
      <s.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </s.Caption>
  </s.Container>
);

export default Banner;
