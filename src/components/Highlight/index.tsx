import Button from 'components/Button';

import * as s from './styles';

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
  <s.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <s.FloatImage src={floatImage} alt={title} />}
    <s.ContentWrapper>
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </s.ContentWrapper>
  </s.Wrapper>
);

export default Highlight;
