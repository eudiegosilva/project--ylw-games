import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';

import styled from 'styled-components';

import Slider from '.';

export default {
  title: 'Design System/Slider/Slider',
  component: Slider,
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    jest: ['Slider.test.tsx']
  }
} as Meta;

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Slide = styled.div`
  background: #ffcb00;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid #171717;
  color: #171717;
  text-align: center;
`;

export const SliderHorizontal: Story = () => (
  <Slider settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
};

export const SliderVertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);
