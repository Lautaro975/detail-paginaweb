'use client';

import Image, { ImageProps } from 'next/image';

interface ILazyImage extends ImageProps {
  className?: string;
  onLoad?: () => void;
}

const LazyImage = ({ className, alt, onLoad, ...rest }: ILazyImage) => (
  <Image
    {...rest}
    alt={alt}
    loading="lazy"
    onLoad={(event) => {
      event.currentTarget.classList.remove('opacity-0');
      onLoad?.();
    }}
    className={`opacity-0 duration-300 ${className}`}
  />
);

export default LazyImage