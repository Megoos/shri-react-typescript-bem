import { cn } from '@bem-react/classname';
import React from 'react';
import Icon from '../../Icon';
import './CardHeader.scss';

const cnCardHeader = cn('CardHeader');

interface IHeaderProps {
  icon: string;
  text: string;
  type: string;
}

function CardHeader({ icon, text, type }: IHeaderProps) {
  return (
    <header className={cnCardHeader()}>
      <div className={cnCardHeader('IconContainer')}>
        <Icon icon={icon} theme={type}></Icon>
      </div>

      <h3 className={cnCardHeader('Title')}>{text}</h3>
    </header>
  );
}

export default CardHeader;
