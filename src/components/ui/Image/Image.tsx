import { FC, useState, useEffect } from 'react';
import Skeleton from '../Skeleton/Skeleton';
import IconLoadingError from '/src/assets/icons/loading-error.svg?react';
import './Image.scss';

type ImageProps = {
  src: string | undefined;
  srcSet?: string;
  alt: string;
  className?: string;
  loadingClassName?: string;
  draggable?: boolean;
}

/// Ототбражает картинку с индикатором загрузки (в том числе при пустом src)
const Image: FC<ImageProps> = ({ src, srcSet, alt, className, loadingClassName, draggable }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsLoading(true);
      setIsLoaded(false);
    }
  }, [src])

  const handleStartLoading = () => {
    setIsLoading(true);
    setIsLoaded(false);
  }

  const handleLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsLoading(false);
    setIsLoaded(false);
  };

  if (!isLoading && !isLoaded) {
    return (
      <div className={`image ${className}`}>
        <div className='image__error-wrapper'>
          <IconLoadingError aria-hidden={true} />
          <span>{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && <Skeleton className={`${className} ${loadingClassName ?? ''}`} />}
      {src &&
        <img
          className={`image ${className}`}
          src={src}
          srcSet={srcSet}
          alt={alt}
          draggable={draggable ?? false}
          onLoadStart={handleStartLoading}
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      }
    </>
  );
}

export default Image;