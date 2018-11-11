import { cn } from '@bem-react/classname';
import React from 'react';
import CardHeader from './CardHeader';
import CardMeta from './CardMeta';
import {ICardProps} from './index';

import './Card.scss';

const cnCard = cn('Card');

export const Card: React.SFC<ICardProps> = ({eventData, className = cnCard('MainPart')}) => {
  return (
    <article className={cnCard({ size: eventData.size })}>
      <div className={className}>
        <CardHeader icon={eventData.icon} text={eventData.title} type={eventData.type}/>
        <CardMeta source={eventData.source} date={eventData.time}></CardMeta>
      </div>
    </article>
  );
};
