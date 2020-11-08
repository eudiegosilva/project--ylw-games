import SlickSlider, { Settings } from 'react-slick';

import * as s from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const Slider = ({ children, settings }: SliderProps) => {
  return (
    <s.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </s.Wrapper>
  );
};

export default Slider;
