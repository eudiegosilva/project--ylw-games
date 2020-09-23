import * as s from './styles';

import Button from 'components/Button';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'left' | 'right';
};

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <s.Container backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <s.FloatImageWrapper src={floatImage} alt={title} />}
    <s.Content>
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </s.Content>
  </s.Container>
);

export default Highlight;
