import { cn } from '@bem-react/classname';
import React from 'react';
import './CardMeta.scss';

const cnCardMeta = cn('CardMeta');

interface IHeaderProps {
  date: string;
  source: string | null;
}

function CardMeta({ date, source }: IHeaderProps) {
  return (
    <div className={cnCardMeta()}>
      <p className={cnCardMeta('Source')}>{source}</p>
      <p className={cnCardMeta('Date')}>{date}</p>
    </div>
  );
}

export default CardMeta;
