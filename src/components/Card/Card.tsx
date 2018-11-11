import { cn } from '@bem-react/classname';
import React from 'react';
import CardHeader from './CardHeader';
import CardMeta from './CardMeta';

import './Card.scss';

const cnCard = cn('Card');

export interface IEventData {
  type: string;
  title: string;
  source: string;
  time: string;
  description: string | null;
  icon: string;
  size: string;
}

interface ICardProps {
  eventData: IEventData;
}

function Card({ eventData }: ICardProps) {
  return (
    <article className={cnCard({ size: eventData.size })}>
      <div className={cnCard('MainPart', {critical: eventData.type === 'critical'})}>
        <CardHeader icon={eventData.icon} text={eventData.title} type={eventData.type}/>
        <CardMeta source={eventData.source} date={eventData.time} type={eventData.type}></CardMeta>
      </div>
    </article>
  );
}

export default Card;
