import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import { GameCardProps } from 'components/GameCard';
import Highlight, { HighlightProps } from 'components/Highlight';

import * as s from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
  titleColor?: 'white' | 'secondary';
};

const Showcase = ({
  title,
  titleColor = 'white',
  games,
  highlight
}: ShowcaseProps) => (
  <s.Wrapper>
    {!!title && (
      <Heading lineLeft color={titleColor}>
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </s.Wrapper>
);

export default Showcase;
