import { cn } from '@bem-react/classname';
import React from 'react';

const cnLink = cn('Link');

export interface ILinkProps {
    url: string;
    className?: string;
}

export const Link: React.SFC<ILinkProps> = (props) => (
    <a className={cnLink(null, [props.className])} href={props.url}>{props.children}</a>
);
