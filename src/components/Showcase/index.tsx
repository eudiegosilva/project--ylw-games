import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighlightProps } from 'components/Highlight';
import { GameCardProps } from 'components/GameCard';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type ShowcaseProps = {
  contentStyle?: ColorStyleProps;
  games?: GameCardProps[];
  highlight?: HighlightProps;
  title?: string;
  titleColor?: 'white' | 'secondary';
};

const Showcase = ({
  contentStyle = 'primary',
  games,
  highlight,
  title,
  titleColor = 'white'
}: ShowcaseProps) => (
  <s.Wrapper>
    {!!title && (
      <Heading lineLeft color={titleColor} lineColor={contentStyle}>
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} contentStyle={contentStyle} />}
    {!!games && <GameCardSlider items={games} contentStyle={contentStyle} />}
  </s.Wrapper>
);

export default Showcase;
