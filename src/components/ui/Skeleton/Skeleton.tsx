import { FC } from 'react';
import './Skeleton.scss';

type SkeletonProps = {
  className?: string;
  linesCount?: number;
  width?: number | string;
  height?: number | string;
}

const Skeleton: FC<SkeletonProps> = ({ className, linesCount, width, height }) => {
  const style = {
    "--lines-count": linesCount,
    width: width,
    height: height,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={`skeleton ${className ?? ''}`}
    />
  )
}

export default Skeleton;