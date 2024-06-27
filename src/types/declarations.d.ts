declare module 'react-slick' {
  import { Component } from 'react';

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    adaptiveHeight?: boolean;
    [key: string]: any; // Allow additional settings if necessary
  }

  export class Slider extends Component<Settings> {}
  export default Slider;
}
