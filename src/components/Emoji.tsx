import meh from '../assets/meh.webp';
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh' },
    4: { src: thumbsUp, alt: 'recommended' },
    5: { src: bullsEye, alt: 'exceptional' },
  };

  return (
    <>
      <Image {...EmojiMap[rating]} marginTop={3} width={8} height={8} />
    </>
  );
};

export default Emoji;
