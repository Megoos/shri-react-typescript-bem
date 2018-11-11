import { cn } from '@bem-react/classname';
import React from 'react';
import {Link} from '../Link/Link';
import './Footer.scss';

const cnFooter = cn('Footer');

export default function Footer() {
  return (
    <footer className={cnFooter()}>
      <div className={cnFooter('LinkContainer')}>
        <Link url="#" className={cnFooter('Link')}>Помощь</Link>
        <Link url="#" className={cnFooter('Link')}>Обратная связь</Link>
        <Link url="#" className={cnFooter('Link')}>Разработчикам</Link>
        <Link url="#" className={cnFooter('Link')}>Условия использования</Link>
      </div>
      <p className={cnFooter('Copyright')}>© 2001–2018 ООО «Яндекс»</p>
    </footer>
  );
}
