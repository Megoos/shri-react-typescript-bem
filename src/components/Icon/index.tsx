import { compose, IClassNameProps } from '@bem-react/core';
import { IconThemeCritical } from './_theme/Icon_theme_critical';
import { Icon as Base } from './Icon';

export interface IIconProps extends IClassNameProps {
  icon: string;
  theme?: string;
}

export default compose(IconThemeCritical)(Base);
