import React, { useState } from 'react';
import { placeholder } from '@utils/productImages';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sources?: string[];
  fallbackLabel?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  sources,
  fallbackLabel = 'Image',
  alt,
  onError,
  ...props
}) => {
  const allSources = sources ?? (src ? [src, placeholder(fallbackLabel)] : [placeholder(fallbackLabel)]);
  const [index, setIndex] = useState(0);
  const currentSrc = allSources[index] ?? placeholder(fallbackLabel);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (index < allSources.length - 1) {
      setIndex(prev => prev + 1);
    }
    onError?.(e);
  };

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      loading={props.loading ?? 'lazy'}
      referrerPolicy="no-referrer"
      onError={handleError}
    />
  );
};
