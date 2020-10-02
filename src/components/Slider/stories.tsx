import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled, { css } from 'styled-components';
import Slider from '.';

export default {
  title: 'Design System/Slider',
  component: Slider
} as Meta;

const Slide = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border: 0.4rem solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    padding: 10rem 0;
    text-align: center;
    width: 30rem;
  `}
`;

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
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
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
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
    </Slider>
  </div>
);
