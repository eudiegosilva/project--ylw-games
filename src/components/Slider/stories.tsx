import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import Slider from '.';

import * as s from './styles';

export default {
  title: 'Design System/Slider',
  component: Slider
} as Meta;

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const SliderHorizontal: Story = () => (
  <div
    style={{
      maxWidth: '60rem',
      margin: '0 auto'
    }}
  >
    <Slider settings={horizontalSettings}>
      <s.Slide>1</s.Slide>
      <s.Slide>2</s.Slide>
      <s.Slide>3</s.Slide>
      <s.Slide>4</s.Slide>
    </Slider>
  </div>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
};

export const SliderVertical: Story = () => (
  <div
    style={{
      maxWidth: '60rem',
      margin: '0 auto'
    }}
  >
    <Slider settings={verticalSettings}>
      <s.Slide>1</s.Slide>
      <s.Slide>2</s.Slide>
      <s.Slide>3</s.Slide>
      <s.Slide>4</s.Slide>
    </Slider>
  </div>
);
