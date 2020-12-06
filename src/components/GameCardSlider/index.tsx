import { ArrowLeftIcon, ArrowRightIcon } from 'assets/icons';

import GameCard, { GameCardProps } from 'components/GameCard';
import Slider, { SliderSettings } from 'components/Slider';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type GameCardSliderProps = {
  items: GameCardProps[];
  arrowColorStyle?: ColorStyleProps;
  contentStyle?: ColorStyleProps;
};

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRightIcon aria-label="next games" />,
  prevArrow: <ArrowLeftIcon aria-label="previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
};
const GameCardSlider = ({
  items,
  arrowColorStyle = 'white',
  contentStyle = 'primary'
}: GameCardSliderProps) => (
  <s.Wrapper arrowColorStyle={arrowColorStyle}>
    <Slider settings={settings}>
      {items.map(game => (
        <GameCard key={game.title} {...game} contentStyle={contentStyle} />
      ))}
    </Slider>
  </s.Wrapper>
);

export default GameCardSlider;
