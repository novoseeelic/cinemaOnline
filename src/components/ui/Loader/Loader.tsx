import { FC } from 'react';
import './Loader.scss';

type LoaderProps = {
  small?: boolean;
  black?: boolean;
}

const Loader: FC<LoaderProps> = ({ small, black }) => {
  return (
    <div className={`loader ${small ? 'loader--small' : ''} ${black ? 'loader--black' : ''}`} />
  )
}

export default Loader;