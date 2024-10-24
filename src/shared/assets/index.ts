export type TImageKeys = '1.jpg' | '2.jpg' | '3.jpg' | '4.jpg' | '5.jpg';

import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';

export const images: Record<TImageKeys, string> = {
  '1.jpg': image1,
  '2.jpg': image2,
  '3.jpg': image3,
  '4.jpg': image4,
  '5.jpg': image5,
};
