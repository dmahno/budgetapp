export type TImageKeys = '1.jpg' | '2.jpg' | '3.jpg' | '4.jpg' | '5.jpg';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';

export const images: Record<TImageKeys, string> = {
  '1.jpg': image1,
  '2.jpg': image2,
  '3.jpg': image3,
  '4.jpg': image4,
  '5.jpg': image5,
};
