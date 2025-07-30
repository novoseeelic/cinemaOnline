import './Heading.scss';
import { FC, ReactNode } from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4;
  visual?: 1 | 2 | 3 | 4 | 'hidden'
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ level, visual, children, dark, className }) => {
  const classNames = visual === 'hidden'
    ? 'visually-hidden'
    : `heading heading--${visual ?? level} ${dark ? 'heading--dark' : ''} ${className ?? ''}`;

  switch (level) {
    case 1:
      return <h1 className={classNames}>{children}</h1>
    case 2:
      return <h2 className={classNames}>{children}</h2>
    case 3:
      return <h3 className={classNames}>{children}</h3>
    case 4:
      return <h4 className={classNames}>{children}</h4>
  }
}

export default Heading;