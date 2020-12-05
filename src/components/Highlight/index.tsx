import Button from 'components/Button';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type HighlightProps = {
  alignment?: 'left' | 'right';
  backgroundImage: string;
  buttonLabel: string;
  buttonLink: string;
  contentStyle?: ColorStyleProps;
  floatImage?: string;
  subtitle: string;
  title: string;
};

const Highlight = ({
  alignment = 'right',
  backgroundImage,
  buttonLabel,
  buttonLink,
  contentStyle = 'primary',
  floatImage,
  subtitle,
  title
}: HighlightProps) => (
  <s.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <s.FloatImage src={floatImage} alt={title} />}
    <s.ContentWrapper>
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      <Button as="a" href={buttonLink} colorStyle={contentStyle}>
        {buttonLabel}
      </Button>
    </s.ContentWrapper>
  </s.Wrapper>
);

export default Highlight;
