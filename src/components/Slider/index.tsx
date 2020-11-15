import { forwardRef } from 'react';
import SlickSlider, { Settings } from 'react-slick';

import * as s from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <s.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </s.Wrapper>
  );
};

export default forwardRef(Slider);
