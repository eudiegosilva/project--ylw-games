import GameCard, { GameCardProps } from 'components/GameCard';
import Slider, { SliderSettings } from 'components/Slider';

import { ArrowBackIos as ArrowLeftIcon } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRightIcon } from '@styled-icons/material-outlined/ArrowForwardIos';

import * as s from './styles';

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: 'white' | 'black';
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
const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <s.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map(game => (
        <GameCard key={game.title} {...game} />
      ))}
    </Slider>
  </s.Wrapper>
);

export default GameCardSlider;
