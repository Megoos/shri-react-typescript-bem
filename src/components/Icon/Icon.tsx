import { cn } from '@bem-react/classname';
import React from 'react';
import Sprite from './assets/sprite.svg';
import { IIconProps } from './index';

import './Icon.scss';

const cnIcon = cn('Icon');

export const Icon: React.SFC<IIconProps> = ({ icon, className = cnIcon() }) => {
  return (
    <svg className={className}>
      <use xlinkHref={Sprite + `#${icon}`} />
    </svg>
  );
};
