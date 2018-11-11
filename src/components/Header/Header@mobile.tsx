import { cn } from '@bem-react/classname';
import React from 'react';
import { Link } from '../Link/Link';
import logo from './assets/Y_home.svg';
import './Header.scss';

const cnHeader = cn('Header');

export default function Header() {
  return (
    <header className={cnHeader()}>
      <Link url="#">
        <img src={logo} alt="ЯндексДом" className={cnHeader('Logo')} />
      </Link>
      <Link url="#" className={cnHeader('HamburgerMenu')}>
        <div className={cnHeader('HamburgerLogo')} />
      </Link>
    </header>
  );
}
