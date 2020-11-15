import { useState, useEffect, useRef } from 'react';

import SlickSlider from 'react-slick';

import Slider, { SliderSettings } from 'components/Slider';

import { ArrowBackIos as ArrowLeftIcon } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRightIcon } from '@styled-icons/material-outlined/ArrowForwardIos';
import { X as CloseIcon } from '@styled-icons/feather/X';

import * as s from './styles';

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const defaultSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRightIcon aria-label="next image" />,
  prevArrow: <ArrowLeftIcon aria-label="previous image" />
};

const gallerySettings: SliderSettings = {
  ...defaultSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        draggable: true
      }
    }
  ]
};

const modalSettings: SliderSettings = {
  ...defaultSettings,
  slidesToShow: 1
};
const GallerySlider = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false);
    };
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  const sliderRef = useRef<SlickSlider>(null);

  return (
    <s.Wrapper>
      <Slider ref={sliderRef} settings={gallerySettings}>
        {items.map((gameImage, index) => (
          <s.Image
            key={gameImage.src}
            role="button"
            src={gameImage.src}
            alt={`thumb - ${gameImage.label}`}
            onClick={() => {
              setIsOpen(true);
              sliderRef.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <s.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <s.CloseWrapper
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon size={40} />
        </s.CloseWrapper>

        <s.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map(gameImage => (
              <s.Image
                key={`gallery - ${gameImage.src}`}
                src={gameImage.src}
                alt={`${gameImage.label}`}
              />
            ))}
          </Slider>
        </s.Content>
      </s.Modal>
    </s.Wrapper>
  );
};

export default GallerySlider;
