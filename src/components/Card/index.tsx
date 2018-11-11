import { compose, IClassNameProps } from '@bem-react/core';
import { CardThemeCritical } from './_theme/Card_theme_crititcal';
import { Card as Base } from './Card';

export interface IEventData {
  type: string;
  title: string;
  source: string;
  time: string;
  description: string | null;
  icon: string;
  size: string;
}

export interface ICardProps extends IClassNameProps {
  eventData: IEventData;
  theme?: string;
}

export const Card = compose(CardThemeCritical)(Base);
