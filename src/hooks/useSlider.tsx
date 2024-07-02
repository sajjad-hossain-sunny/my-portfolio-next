'use client';
import { RefObject, useCallback, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CustomSlider extends Slider {
  slickNext: () => void;
  slickPrev: () => void;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  speed: number;
  arrows: boolean;
  slidesToShow: number;
  slidesToScroll: number;
}

const useSlider = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2500,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef: RefObject<CustomSlider> = useRef<CustomSlider>(null);

  const scrollNext = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, [sliderRef]);

  const scrollPrev = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }, [sliderRef]);

  return { sliderRef, scrollNext, scrollPrev, settings, Slider };
};

export default useSlider;
