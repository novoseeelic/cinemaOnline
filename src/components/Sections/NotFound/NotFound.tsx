import Container from '../../ui/Container/Container';
import Heading from '../../ui/Heading/Heading';
import IconMovie from '/src/assets/icons/movie.svg?react';
import './NotFound.scss';
import { FC } from 'react';
import ButtonLink from '../../ui/Button/ButtonLink';

type NotFoundProps = {
  title?: string;
}

const NotFound: FC<NotFoundProps> = ({ title }) => {
  title ??= 'Страница не найдена';

  return (
    <section className='not-found'>
      <Container>
        <div className="not-found__wrapper">
          <IconMovie width={128} height={128} aria-hidden={true} />
          <Heading level={1} visual={2}>{title}</Heading>
          <div className="not-found__bottom">
            <ButtonLink to={'/'}>На главную</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NotFound;